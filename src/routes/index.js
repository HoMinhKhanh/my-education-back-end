const UserRouter = require('./UserRouter');
const LessonRouter = require('./LessonRouter');
const NewsRouter = require('./NewsRouter');
const CourseRouter = require('./CourseRouter');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/lesson', LessonRouter);
    app.use('/api/news', NewsRouter);
    app.use('/api/course', CourseRouter);
};

module.exports = routes