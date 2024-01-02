const MyCourse = require('../models/MyCourseModel');

const createMyCourse = (newMyCourse) => {
    return new Promise(async (resolve, reject) => {
        const { userId, courseId } = newMyCourse
        try {
            const createdMyCourse = await MyCourse.create({
                userId,
                courseId
            })
            if(createdMyCourse) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdMyCourse
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const getMyCourse = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const myCourse = await MyCourse.find({
                userId: id,
            }).populate('courseId')
            const count = await MyCourse.countDocuments({ userId: id })
            if (myCourse === null) {
                resolve({
                    status: 'ERR',
                    message: 'The course is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: myCourse,
                total: count
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createMyCourse,
    getMyCourse,
}