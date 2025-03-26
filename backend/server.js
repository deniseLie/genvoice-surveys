const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/surveyapp';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        // Seed initial users if needed
        if (process.env.NODE_ENV !== 'production') {
        require('./utils/seed').seedUsers();
        }
    });
})
.catch(err => {
    console.error('Database connection failed', err);
    process.exit(1);
});