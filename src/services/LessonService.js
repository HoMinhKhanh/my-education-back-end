const Lesson = require('../models/LessonModel');

const createLesson = (newLesson) => {
    return new Promise(async (resolve, reject) => {
        const { name, description, videoId, courseId, rating } = newLesson
        try {
            const checkLesson = await Lesson.findOne({
                name: name
            })
            if (checkLesson !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of lesson is already in use'
                })
            }
            const newLesson = await Lesson.create({
                name, 
                description, 
                videoId, 
                courseId, 
                rating
            })
            if(newLesson) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: newLesson
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const updateLesson = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLesson = await Lesson.findOne({
                _id: id,
            })
            if (checkLesson === null) {
                resolve({
                    status: 'ERR',
                    message: 'The lesson is not defined'
                })
            }

            const updatedLesson = await Lesson.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedLesson,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsLesson = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const lesson = await Lesson.findOne({
                _id: id,
            })
            if (lesson === null) {
                resolve({
                    status: 'ERR',
                    message: 'The lesson is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: lesson,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getAllLesson = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allLesson = await Lesson.find()
            resolve({
                status: 'OK',
                message: 'List all Lessons',
                data: allLesson
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteLesson = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLesson = await Lesson.findOne({
                _id: id,
            })
            if (checkLesson === null) {
                resolve({
                    status: 'ERR',
                    message: 'The lesson is not defined'
                })
            }

            await Lesson.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete lesson Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteManyLesson = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Lesson.deleteMany({ _id: ids }, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete lesson Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createLesson,
    updateLesson,
    getDetailsLesson,
    deleteLesson,
    getAllLesson,
    deleteManyLesson,
}