const AssignmentService = require('../services/AssignmentService');

const createAssignment = async (req, res) => {
    try {
        const { title, description, courseId, instructorId } = req.body
        if (!title || !description || !courseId || !instructorId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await AssignmentService.createAssignment(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsAssignment = async (req, res) => {
    try {
        const assignmentId = req.params.id
        if(!assignmentId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The assignmentId is require'
            })
        }
        const response = await AssignmentService.getDetailsAssignment(assignmentId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const countAssignment = async (req, res) => {
    try {
        const courseId = req.params.id
        if(!courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The courseId is require'
            })
        }
        const response = await AssignmentService.countAssignment(courseId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createAssignment,
    getDetailsAssignment,
    countAssignment,
}