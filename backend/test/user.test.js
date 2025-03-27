const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

describe('User Controller', () => {
  let testUser;
  let adminUser;
  let testUserToken;
  let adminToken;

  beforeEach(async () => {
    // Clear users collection
    await User.deleteMany({});

    // Create test users
    testUser = await User.create({
      username: 'testuser',
      password: 'testpass123',
      role: 'user'
    });

    adminUser = await User.create({
      username: 'adminuser',
      password: 'adminpass123',
      role: 'admin'
    });

    // Generate tokens
    testUserToken = jwt.sign(
      { id: testUser._id, role: testUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    adminToken = jwt.sign(
      { id: adminUser._id, role: adminUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  });

  afterAll(async () => {
    await User.deleteMany({});
  });

  // USER.ROUTES
  describe('User Self-Management', () => {

    // Update username
    describe('PUT /users/username - Update username', () => {
      it('should update username for authenticated user', async () => {
        const res = await request(app)
          .put('/users/username')
          .set('Authorization', `Bearer ${testUserToken}`)
          .send({ username: 'newusername' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Username updated successfully');
        expect(res.body.user.username).toBe('newusername');
      });

      // Reject duplicate username
      it('should reject duplicate username', async () => {
        // First create another user
        await User.create({
          username: 'existinguser',
          password: 'testpass',
          role: 'user'
        });

        const res = await request(app)
          .put('/users/username')
          .set('Authorization', `Bearer ${testUserToken}`)
          .send({ username: 'existinguser' });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'Username already taken');
      });

      // Use Authentication / token
      it('should require authentication', async () => {
        const res = await request(app)
          .put('/users/username')
          .send({ username: 'newusername' });

        expect(res.statusCode).toEqual(401);
      });
    });

    // Update Password
    describe('PUT /users/password - Update password', () => {
      it('should update password with valid current password', async () => {
        const res = await request(app)
          .put('/users/password')
          .set('Authorization', `Bearer ${testUserToken}`)
          .send({
            currentPassword: 'testpass123',
            newPassword: 'newpassword123'
          });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Password updated successfully');
      });

      // wrong current pass
      it('should reject incorrect current password', async () => {
        const res = await request(app)
          .put('/users/password')
          .set('Authorization', `Bearer ${testUserToken}`)
          .send({
            currentPassword: 'wrongpassword',
            newPassword: 'newpassword123'
          });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Current password is incorrect');
      });

      // authentication
      it('should require authentication', async () => {
        const res = await request(app)
          .put('/users/password')
          .send({
            currentPassword: 'testpass123',
            newPassword: 'newpassword123'
          });

        expect(res.statusCode).toEqual(401);
      });
    });

    // Delete account
    describe('DELETE /users - Delete account', () => {
      it('should delete authenticated user account', async () => {
        // Create a temp user to delete
        const tempUser = await User.create({
          username: 'todelete',
          password: 'testpass',
          role: 'user'
        });
        
        const tempToken = jwt.sign(
          { id: tempUser._id, role: tempUser.role },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        const res = await request(app)
          .delete('/users')
          .set('Authorization', `Bearer ${tempToken}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Your account has been deleted successfully');
      });

      // authentication
      it('should require authentication', async () => {
        const res = await request(app)
          .delete('/users');

        expect(res.statusCode).toEqual(401);
      });
    });
  });

  // ADMIN USER
  describe('Admin User Management', () => {

    // Create user
    describe('POST /admin/users - Create User (Admin Only', () => {

      // Successfull
      it('should create a new user when admin is authenticated', async () => {
        const res = await request(app)
          .post('/admin/users')
          .set('Authorization', `Bearer ${adminToken}`)
          .send({
            username: 'newuser',
            password: 'newpass123',
            role: 'user'
          });

          expect(res.statusCode).toEqual(201);
          expect(res.body).toHaveProperty('message', 'User created successfully');
          expect(res.body.user).toHaveProperty('username', 'newuser');
          expect(res.body.user).toHaveProperty('role', 'user');
      });

      // Existing username
      it('should reject creation with existing username', async () => {

        // First create another user
        await User.create({
          username: 'existinguser',
          password: 'testpass',
          role: 'user'
        });

        const res = await request(app)
          .post('/admin/users')
          .set('Authorization', `Bearer ${adminToken}`)
          .send({
            username: 'existinguser',
            password: 'testpass123',
            role: 'user'
          });

          expect(res.statusCode).toEqual(400);
          expect(res.body).toHaveProperty('message', 'Username already exists');
      });

      // Missing requirement field
      it('should reject missing required fields', async () => {
        const res = await request(app)
          .post('/admin/users')
          .set('Authorization', `Bearer ${adminToken}`)
          .send({
            username: 'missingpassword' // no password
          });
  
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'Username and password are required');
      });

      // Reject non-admin
      it('should reject non-admin users', async () => {
        const res = await request(app)
          .post('/admin/users')
          .set('Authorization', `Bearer ${testUserToken}`)
          .send({
            username: 'shouldfail',
            password: 'testpass',
            role: 'user'
          });
  
        expect(res.statusCode).toEqual(403);
      });

      // Require authentication
      it('should require authentication', async () => {
        const res = await request(app)
          .post('/admin/users')
          .send({
            username: 'unauthenticated',
            password: 'testpass',
            role: 'user'
          });
  
        expect(res.statusCode).toEqual(401);
      });
    });

    // GET USERS
    describe('GET /admin/users - Get All Users (Admin Only)', () => {

      // successful
      it('should return all users for admin', async () => {
        const res = await request(app)
          .get('/admin/users')
          .set('Authorization', `Bearer ${adminToken}`);
  
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThanOrEqual(2); // admin + regular user
        expect(res.body[0]).not.toHaveProperty('password'); // password should be excluded
      });
  
      // admin authorization
      it('should reject non-admin users', async () => {
        const res = await request(app)
          .get('/admin/users')
          .set('Authorization', `Bearer ${testUserToken}`);
  
        expect(res.statusCode).toEqual(403);
      });
  
      // token authentication
      it('should require authentication', async () => {
        const res = await request(app)
          .get('/admin/users');
  
        expect(res.statusCode).toEqual(401);
      });
    });
  
    // Get user by User id
    describe('GET /admin/users/:userId - Get User by ID (Admin Only)', () => {
      
      // successfull
      it('should return user details for admin', async () => {
        const res = await request(app)
          .get(`/admin/users/${testUser._id}`)
          .set('Authorization', `Bearer ${adminToken}`);
  
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('username', testUser.username);
        expect(res.body).toHaveProperty('role', testUser.role);
        expect(res.body).not.toHaveProperty('password');
      });
  
      // not found user
      it('should return 404 for non-existent user', async () => {
        const fakeId = '507f1f77bcf86cd799439011'; // Valid but non-existent ID
        const res = await request(app)
          .get(`/admin/users/${fakeId}`)
          .set('Authorization', `Bearer ${adminToken}`);
  
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message', 'User not found');
      });
  
      // invalid userid
      it('should reject invalid user ID format', async () => {
        const res = await request(app)
          .get('/admin/users/invalid-id')
          .set('Authorization', `Bearer ${adminToken}`);
  
        expect(res.statusCode).toEqual(500);
        expect(res.body).toHaveProperty('message', 'Error fetching user');
      });
  
      // admin authorization
      it('should reject non-admin users', async () => {
        const res = await request(app)
          .get(`/admin/users/${adminUser._id}`)
          .set('Authorization', `Bearer ${testUserToken}`);
  
        expect(res.statusCode).toEqual(403);
      });
  
      // token authentication
      it('should require authentication', async () => {
        const res = await request(app)
          .get(`/admin/users/${testUser._id}`);
  
        expect(res.statusCode).toEqual(401);
      });
    });

    // Update user as admin
    describe('PUT /admin/users/:userId - Update user as admin', () => {

      // Successful
      it('should update user details as admin', async () => {
        const res = await request(app)
          .put(`/admin/users/${testUser._id}`)
          .set('Authorization', `Bearer ${adminToken}`)
          .send({
            username: 'adminupdated',
            role: 'moderator'
          });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'User updated successfully');
        expect(res.body.user.username).toBe('adminupdated');
        expect(res.body.user.role).toBe('moderator');
      });

      // Reject non-admin
      it('should reject non-admin users', async () => {
        const res = await request(app)
          .put(`/admin/users/${testUser._id}`)
          .set('Authorization', `Bearer ${testUserToken}`)
          .send({
            username: 'shouldfail',
            role: 'user'
          });

        expect(res.statusCode).toEqual(403);
      });
    });

    // Delete user
    describe('DELETE /admin/users/:userId - Delete user as admin', () => {
      it('should delete user as admin', async () => {
        // Create a temp user to delete
        const tempUser = await User.create({
          username: 'admintodelete',
          password: 'testpass',
          role: 'user'
        });

        const res = await request(app)
          .delete(`/admin/users/${tempUser._id}`)
          .set('Authorization', `Bearer ${adminToken}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'User deleted successfully by admin');
      });

      // Delete but non-admin authorization
      it('should reject non-admin users', async () => {
        const res = await request(app)
          .delete(`/admin/users/${testUser._id}`)
          .set('Authorization', `Bearer ${testUserToken}`);

        expect(res.statusCode).toEqual(403);
      });
    });
  });
});