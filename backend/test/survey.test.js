const request = require('supertest');
const app = require('../server');
const Survey = require('../models/Survey');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

describe('Survey Routes', () => {
    let testUser;
    let testSurvey;
    let validToken;
    let invalidToken = 'invalid.token.here';

    beforeAll(async () => {
        // Create a test user
        testUser = await User.create({
            username: 'testuser',
            password: 'password123'
        });

        // Generate a valid JWT
        validToken = jwt.sign(
            { id: testUser._id },  // Changed to match your implementation
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Create a test survey
        testSurvey = await Survey.create({
            userId: testUser._id,
            questions: [
                {
                    text: 'Initial test question',
                    voiceResponse: null,
                    transcript: null
                },
                {
                    text: 'Initial test question 2',
                    voiceResponse: null,
                    transcript: null
                }
            ]
        });
    });

    afterAll(async () => {
        // Clean up database
        await Survey.deleteMany({});
        await User.deleteMany({});
    });

    // CREATE SURVEY
    describe('POST / - Create a new survey', () => {
        it('should create a new survey with valid questions array', async () => {
            const surveyData = {
                questions: [
                    {
                        text: 'Test question 1',
                        voiceResponse: null,
                        transcript: null
                    },
                    {
                        text: 'Test question 2',
                        voiceResponse: {
                            audioUrl: 'http://example.com/audio1.mp3',
                            duration: 30
                        },
                        transcript: 'This is a test transcript'
                    }
                ]
            };

            const response = await request(app)
                .post('/surveys')
                .set('Authorization', `Bearer ${validToken}`)
                .send(surveyData);

            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('_id');
            expect(response.body.userId).toBe(testUser._id.toString());
            expect(response.body.questions.length).toBe(2);
            expect(response.body.questions[0].text).toBe('Test question 1');
            expect(response.body.questions[1].voiceResponse.audioUrl).toBe('http://example.com/audio1.mp3');
        });
    });

    // Negative Test Cases
    it('should return 400 when questions array is empty', async () => {
        const response = await request(app)
        .post('/surveys')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ questions: [] });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('Survey must have questions.');
    });

    it('should return 400 when questions field is missing', async () => {
        const response = await request(app)
        .post('/surveys')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ title: 'Survey without questions' }); // Missing questions field

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('Survey must have questions.');
    });

    it('should return 400 when question text is missing', async () => {
        const response = await request(app)
        .post('/surveys')
        .set('Authorization', `Bearer ${validToken}`)
        .send({ 
            questions: [{
            // Missing text field
            voiceResponse: null
            }]
        });

        expect(response.statusCode).toBe(400); 
    });

    // GET SURVEYS
    describe('GET / - Get all surveys for user', () => {
        it('should return all surveys for the authenticated user', async () => {
        const response = await request(app)
            .get('/surveys')
            .set('Authorization', `Bearer ${validToken}`);

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body[0].userId).toBe(testUser._id.toString());
        });
    });

    // Negative Test Cases
    it('should return empty array when user has no surveys', async () => {
        // Create a new user with no surveys
        const newUser = await User.create({
            username: 'nosurveyuser',
            password: 'password123'
        });
        
        const newToken = jwt.sign(
            { id: newUser.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        const response = await request(app)
        .get('/surveys')
        .set('Authorization', `Bearer ${newToken}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
        
        // Clean up
        await User.findByIdAndDelete(newUser.id);
    });

    // GET SURVEY
    describe('GET /:id - Get survey by ID', () => {
        it('should return the survey with matching ID', async () => {
           
            const response = await request(app)
                .get(`/surveys/${testSurvey._id}`)
                .set('Authorization', `Bearer ${validToken}`);

            expect(response.statusCode).toBe(200);
            expect(response.body._id).toBe(testSurvey._id.toString());
            expect(response.body.userId).toBe(testUser._id.toString());
            expect(response.body.questions[0].text).toBe('Initial test question');
        });
    });

    // Negative Test Cases
    it('should return 403 when trying to access another user\'s survey', async () => {
        const otherUser = await User.create({
            username: 'otheruser',
            password: 'password123'
        });
        
        const otherSurvey = await Survey.create({
            userId: otherUser.id,
            questions: [{ text: 'Other user question' }]
        });
        
        const response = await request(app)
            .get(`/surveys/${otherSurvey.id}`)
            .set('Authorization', `Bearer ${validToken}`);

        expect(response.statusCode).toBe(403);
        expect(response.body.message).toBe('Unauthorized to view this survey');
        
        // Clean up
        await Survey.findByIdAndDelete(otherSurvey.id);
        await User.findByIdAndDelete(otherUser.id);
    });

    // UPDATE SURVEY
    describe('PUT /:id - Update survey', () => {
        it('should update the survey questions', async () => {
        const updatedQuestions = [
            {
                text: 'Updated question 1',
                voiceResponse: {
                    audioUrl: 'http://example.com/updated.mp3',
                    duration: 45
                },
                transcript: 'Updated transcript'
            }
        ];

        const response = await request(app)
            .put(`/surveys/${testSurvey._id}`)
            .set('Authorization', `Bearer ${validToken}`)
            .send({ questions: updatedQuestions });

        expect(response.statusCode).toBe(200);
        expect(response.body.questions.length).toBe(1);
        expect(response.body.questions[0].text).toBe('Updated question 1');
        expect(response.body.questions[0].voiceResponse.audioUrl).toBe('http://example.com/updated.mp3');
        });
    });

    // Negative Test Cases
    it('should return 400 when trying to update with empty questions array', async () => {
        const response = await request(app)
        .put(`/surveys/${testSurvey._id}`)
        .set('Authorization', `Bearer ${validToken}`)
        .send({ questions: [] });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('Survey must have questions.');
    });

    it('should return 403 when trying to update another user\'s survey', async () => {
        const otherUser = await User.create({
            username: 'updateotheruser',
            password: 'password123'
        });
        
        const otherSurvey = await Survey.create({
            userId: otherUser.id,
            questions: [{ text: 'Other user question' }]
        });
        
        const response = await request(app)
            .put(`/surveys/${otherSurvey.id}`)
            .set('Authorization', `Bearer ${validToken}`)
            .send({ questions: [{ text: 'Attempted update' }] });

        expect(response.statusCode).toBe(403);
        expect(response.body.message).toBe('Unauthorized to update this survey');
        
        // Clean up
        await Survey.findByIdAndDelete(otherSurvey.id);
        await User.findByIdAndDelete(otherUser.id);
    });

    // DELETE
    describe('DELETE /:id - Delete survey', () => {
        it('should delete the survey with valid ID', async () => {
            const surveyToDelete = await Survey.create({
                userId: testUser._id,
                questions: [{ text: 'Question to delete' }]
            });

            const response = await request(app)
                .delete(`/surveys/${surveyToDelete.id}`)
                .set('Authorization', `Bearer ${validToken}`);

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe('Survey deleted successfully');

            // Verify deletion
            const deletedSurvey = await Survey.findById(surveyToDelete.id);
            expect(deletedSurvey).toBeNull();
        });

        // Negative Test Cases
        it('should return 403 when trying to delete another user\'s survey', async () => {
            const otherUser = await User.create({
                username: 'deleteotheruser',
                password: 'password123'
            });
            
            const otherSurvey = await Survey.create({
                userId: otherUser.id,
                questions: [{ text: 'Other user question' }]
            });
            
            const response = await request(app)
                .delete(`/surveys/${otherSurvey.id}`)
                .set('Authorization', `Bearer ${validToken}`);

            expect(response.statusCode).toBe(403);
            expect(response.body.message).toBe('Unauthorized to delete this survey');
            
            // Clean up
            await Survey.findByIdAndDelete(otherSurvey.id);
            await User.findByIdAndDelete(otherUser.id);
        });
    });

    // Additional
    describe('Survey Model Validation', () => {
        it('should enforce required question text field', async () => {
            const invalidSurvey = new Survey({
                userId: testUser._id,
                questions: [{
                // Missing text field
                voiceResponse: null
                }]
            });

            let error;
            try {
                await invalidSurvey.save();
            } catch (e) {
                error = e;
            }
            
            expect(error.errors['questions.0.text']).toBeDefined();
        });

        it('should enforce maximum length for question text', async () => {
            const invalidSurvey = new Survey({
                userId: testUser._id,
                questions: [{
                text: 'a'.repeat(501), // Exceeds 500 character limit
                voiceResponse: null
                }]
            });

            let error;
            try {
                await invalidSurvey.save();
            } catch (e) {
                error = e;
            }
            
            expect(error.errors['questions.0.text']).toBeDefined();
        });

        it('should enforce maximum length for transcript', async () => {
            const invalidSurvey = new Survey({
                    userId: testUser._id,
                    questions: [{
                    text: 'Valid question',
                    transcript: 'a'.repeat(1001) // Exceeds 1000 character limit
                }]
            });

            let error;
            try {
                await invalidSurvey.save();
            } catch (e) {
                error = e;
            }
            
            expect(error.errors['questions.0.transcript']).toBeDefined();
        });
    });
});