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

const updateAnswer = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAnswer = await Answer.findOne({
                _id: id,
            })
            if (checkAnswer === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Answer is not defined'
                })
            }

            const updatedAnswer = await Answer.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedAnswer,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsAnswer = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answer = await Answer.findOne({ _id: id })
                .populate({
                    path: 'assignmentId',
                    select: 'description'
                })
                .populate({
                    path: 'studentId',
                    select: '_id name'
                });
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

const deleteAnswer = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAnswer = await Answer.findOne({
                _id: id,
            })
            if (checkAnswer === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Answer is not defined'
                })
            }

            await Answer.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete Answer Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteManyAnswer = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Answer.deleteMany({ _id: ids }, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete Answers Success',
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

const countAnswerInstructor = (courseId, assignmentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answers = await Answer.find({ courseId: courseId, assignmentId: assignmentId })
                .populate({
                    path: 'assignmentId',
                    select: 'description'
                })
                .populate({
                    path: 'studentId',
                    select: '_id name'
                });
            const count = await Answer.countDocuments({ courseId: courseId, assignmentId: assignmentId });
            resolve({
                status: 'OK',
                message: 'Count answers instructor success',
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
    updateAnswer,
    getDetailsAnswer,
    deleteAnswer,
    deleteManyAnswer,
    countAnswer,
    countAnswerInstructor,
}