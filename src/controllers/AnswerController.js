const AnswerService = require('../services/AnswerService');

const createAnswer = async (req, res) => {
    try {
        const { title, assignmentId, studentId, courseId, content, score } = req.body
        if (!assignmentId || !studentId || !courseId || !content) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await AnswerService.createAnswer(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const updateAnswer = async (req, res) => {
    try {
        const answerId = req.params.id
        const data = req.body
        if(!answerId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The answerId is require'
            })
        }
        const response = await AnswerService.updateAnswer(answerId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsAnswer = async (req, res) => {
    try {
        const answerId = req.params.id
        if(!answerId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The answerId is require'
            })
        }
        const response = await AnswerService.getDetailsAnswer(answerId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteAnswer = async (req, res) => {
    try {
        const answerId = req.params.id
        if(!answerId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The answerId is require'
            })
        }
        const response = await AnswerService.deleteAnswer(answerId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteManyAnswer = async (req, res) => {
    try {
        const ids = req.body.ids
        if(!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is require'
            })
        }
        const response = await AnswerService.deleteManyAnswer(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const countAnswer = async (req, res) => {
    try {
        const { courseId, studentId } = req.body
        if(!courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The courseId is require'
            })
        }
        if(!studentId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The studentId is require'
            })
        }
        const response = await AnswerService.countAnswer(courseId, studentId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const countAnswerInstructor = async (req, res) => {
    try {
        const { courseId, assignmentId } = req.body
        if(!courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The courseId is require'
            })
        }
        if(!assignmentId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The assignmentId is require'
            })
        }
        const response = await AnswerService.countAnswerInstructor(courseId, assignmentId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
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