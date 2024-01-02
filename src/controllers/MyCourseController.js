const MyCourseService = require('../services/MyCourseService');

const createMyCourse = async (req, res) => {
    try {
        const { userId, courseId } = req.body
        if (!userId || !courseId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId or courseId is required'
            })
        }

        const response = await MyCourseService.createMyCourse(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getMyCourse = async (req, res) => {
    try {
        const userId = req.params.id
        if(!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is require'
            })
        }
        const response = await MyCourseService.getMyCourse(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createMyCourse,
    getMyCourse,
}