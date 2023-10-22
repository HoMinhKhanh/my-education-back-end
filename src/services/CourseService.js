const Course = require('../models/CourseModel');

const createCourse = (newCourse) => {
    return new Promise(async (resolve, reject) => {
        const { name, description, image, type, level, price, listLessons, member } = newCourse
        try {
            const createdCourse = await Course.create({
                name, 
                description, 
                image, 
                type, 
                level, 
                price, 
                listLessons,
                member,
            })
            if(createdCourse) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdCourse
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const updateCourse = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCourse = await Course.findOne({
                _id: id,
            })
            if (checkCourse === null) {
                resolve({
                    status: 'ERR',
                    message: 'The course is not defined'
                })
            }

            const updatedCourse = await Course.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedCourse,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsCourse = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const course = await Course.findOne({
                _id: id,
            })
            if (course === null) {
                resolve({
                    status: 'ERR',
                    message: 'The course is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: course,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getAllCourse = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allCourse = await Course.find()
            resolve({
                status: 'OK',
                message: 'List all Courses',
                data: allCourse
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteCourse = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCourse = await Course.findOne({
                _id: id,
            })
            if (checkCourse === null) {
                resolve({
                    status: 'ERR',
                    message: 'The course is not defined'
                })
            }

            await Course.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete course Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createCourse,
    updateCourse,
    getDetailsCourse,
    getAllCourse,
    deleteCourse,
}