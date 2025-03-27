const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('Authentication System', () => {
    let authToken;
    const testUser = {
        username: 'testuser',
        password: 'testpass123'
    };

    // Clear users collection before tests
    beforeAll(async () => {
        // Start server on a different port for tests
        server = app.listen(0);

        await User.deleteMany({});
    });

    // Clean up after all tests
    afterAll(async () => {
        // Close the server
        await server.close();
        
        await User.deleteMany({});
    });

    // REGISTER
    describe('POST /register', () => {

        // success
        it('should register a new user', async () => {
        const res = await request(app)
            .post('/register')
            .send(testUser);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User created successfully');
        expect(res.body.user).toHaveProperty('username', testUser.username);
        expect(res.body).toHaveProperty('token');
        });

        // no existing username
        it('should reject duplicate username', async () => {
        const res = await request(app)
            .post('/register')
            .send(testUser);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'Username already exists');
        });

        // validate required fields
        it('should validate required fields', async () => {
        const res = await request(app)
            .post('/register')
            .send({ username: '' });

        expect(res.statusCode).toEqual(500);
        expect(res.body).toHaveProperty('message', 'Registration failed');
        });
    });

    // LOGIN
    describe('POST /login', () => {

        // success
        it('should login with valid credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send(testUser);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Login successful');
        expect(res.body.user).toHaveProperty('username', testUser.username);
        expect(res.body).toHaveProperty('token');
        
        // Store token for subsequent tests
        authToken = res.body.token;
        });

        // reject invalid pass
        it('should reject invalid password', async () => {
        const res = await request(app)
            .post('/login')
            .send({
            username: testUser.username,
            password: 'wrongpassword'
            });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Incorrect username or password');
        });

        // reject non existing username
        it('should reject unknown username', async () => {
        const res = await request(app)
            .post('/login')
            .send({
            username: 'nonexistent',
            password: 'doesntmatter'
            });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Incorrect username or password');
        });
    });

    // LOGOUT
    describe('POST /logout', () => {

        // success
        it('should clear authentication token', async () => {
        const res = await request(app)
            .post('/logout')
            .set('Authorization', `Bearer ${authToken}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Logout successful');
        });

        // reject unauthenticated
        // it('should reject unauthenticated requests', async () => {
        // const res = await request(app)
        //     .post('/logout');

        // expect(res.statusCode).toEqual(401);
        // });
    });
});