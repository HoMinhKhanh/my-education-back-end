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

const getAllCourse = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalCourse = await Course.count()
            if(filter) {
                const label = filter[0]
                const allCoursesFilter = await Course.find({
                    [label]: { '$regex': filter[1] }
                }).limit(limit).skip(page * limit)
                resolve({
                    status: 'OK',
                    message: 'List all Courses after filtering',
                    data: allCoursesFilter,
                    total: totalCourse,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalCourse / limit),
                })
            }
            if(sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allCoursesSort = await Course.find().limit(limit).skip(page * limit).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'List all Courses after sorting',
                    data: allCoursesSort,
                    total: totalCourse,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalCourse / limit),
                })
            }
            const allCourses = await Course.find().limit(limit).skip(page * limit)
            resolve({
                status: 'OK',
                message: 'List all Courses',
                data: allCourses,
                total: totalCourse,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalCourse / limit),
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

const deleteManyCourse = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Course.deleteMany({ _id: ids }, { new: true })
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
    deleteManyCourse,
}