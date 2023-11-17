const CourseService = require('../services/CourseService');

const createCourse = async (req, res) => {
    try {
        const { name, description, image, type, level, price, listLessons, member, instructorId } = req.body
        if (!name || !description || !type || !price) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await CourseService.createCourse(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const updateCourse = async (req, res) => {
    try {
        const courseId = req.params.id
        const data = req.body
        if(!courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The courseId is require'
            })
        }
        const response = await CourseService.updateCourse(courseId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsCourse = async (req, res) => {
    try {
        const courseId = req.params.id
        if(!courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The courseId is require'
            })
        }
        const response = await CourseService.getDetailsCourse(courseId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getAllCourse = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await CourseService.getAllCourse(Number(limit) || 100, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getAllCourseInstructor = async (req, res) => {
    try {
        const instructorId = req.params.id
        if(!instructorId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The instructorId is require'
            })
        }
        const response = await CourseService.getAllCourseInstructor(instructorId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteCourse = async (req, res) => {
    try {
        const courseId = req.params.id
        if(!courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The courseId is require'
            })
        }
        const response = await CourseService.deleteCourse(courseId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteManyCourse = async (req, res) => {
    try {
        const ids = req.body.ids
        if(!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is require'
            })
        }
        const response = await CourseService.deleteManyCourse(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createCourse,
    updateCourse,
    getDetailsCourse,
    getAllCourse,
    getAllCourseInstructor,
    deleteCourse,
    deleteManyCourse,
}