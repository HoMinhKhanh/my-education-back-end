const Answer = require('../models/AnswerModel');

const createAnswer = (newAnswer) => {
    return new Promise(async (resolve, reject) => {
        const { title, assignmentId, studentId, courseId, content, score } = newAnswer
        try {
            const createdAnswer = await Answer.create({
                title,
                assignmentId, 
                studentId, 
                courseId, 
                content, 
                score,
            })
            if(createdAnswer) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdAnswer
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsAnswer = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answer = await Answer.findOne({
                _id: id,
            })
            if (answer === null) {
                resolve({
                    status: 'ERR',
                    message: 'The answer is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: answer,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const countAnswer = (courseId, studentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answers = await Answer.find({ courseId: courseId, studentId: studentId });
            const count = await Answer.countDocuments({ courseId: courseId, studentId: studentId });
            resolve({
                status: 'OK',
                message: 'Count answers success',
                data: answers,
                total: count,
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createAnswer,
    getDetailsAnswer,
    countAnswer,
}