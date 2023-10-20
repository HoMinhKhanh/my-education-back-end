const LessonService = require('../services/LessonService');

const createLesson = async (req, res) => {
    try {
        const { name, description, videoId, courseId, rating } = req.body
        if (!name || !videoId || !courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await LessonService.createLesson(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const updateLesson = async (req, res) => {
    try {
        const lessonId = req.params.id
        const data = req.body
        if(!lessonId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The lessonId is require'
            })
        }
        const response = await LessonService.updateLesson(lessonId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsLesson = async (req, res) => {
    try {
        const lessonId = req.params.id
        if(!lessonId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The lessonId is require'
            })
        }
        const response = await LessonService.getDetailsLesson(lessonId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getAllLesson = async (req, res) => {
    try {
        const response = await LessonService.getAllLesson()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteLesson = async (req, res) => {
    try {
        const lessonId = req.params.id
        if(!lessonId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The lessonId is require'
            })
        }
        const response = await LessonService.deleteLesson(lessonId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createLesson,
    updateLesson,
    getDetailsLesson,
    deleteLesson,
    getAllLesson,
}