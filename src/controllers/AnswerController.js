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

module.exports = { 
    createAnswer,
    getDetailsAnswer,
    countAnswer,

}