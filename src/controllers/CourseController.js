const CourseService = require('../services/CourseService');

const createCourse = async (req, res) => {
    try {
        const { name, description, image, type, level, price, listLessons } = req.body
        if (!name || !description || !type || !price) {
            return res.status(200).json({
                status: 'error',
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
                status: 'error',
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
                status: 'error',
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
        const response = await CourseService.getAllCourse()
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
                status: 'error',
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

module.exports = { 
    createCourse,
    updateCourse,
    getDetailsCourse,
    getAllCourse,
    deleteCourse,
}