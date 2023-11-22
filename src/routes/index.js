const UserRouter = require('./UserRouter');
const LessonRouter = require('./LessonRouter');
const NewsRouter = require('./NewsRouter');
const CourseRouter = require('./CourseRouter');
const AttendanceRouter = require('./AttendanceRouter');
const AssignmentRouter = require('./AssignmentRouter');
const AnswerRouter = require('./AnswerRouter');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/lesson', LessonRouter);
    app.use('/api/news', NewsRouter);
    app.use('/api/course', CourseRouter);
    app.use('/api/attendance', AttendanceRouter);
    app.use('/api/assignment', AssignmentRouter);
    app.use('/api/answer', AnswerRouter);
};

module.exports = routes