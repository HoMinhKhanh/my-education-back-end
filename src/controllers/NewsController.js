const NewsService = require('../services/NewsService');

const createNews = async (req, res) => {
    try {
        const { title, content, images, author } = req.body
        if (!title || !content || !author) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await NewsService.createNews(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const updateNews = async (req, res) => {
    try {
        const newsId = req.params.id
        const data = req.body
        if(!newsId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The newsId is require'
            })
        }
        const response = await NewsService.updateNews(newsId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getDetailsNews = async (req, res) => {
    try {
        const newsId = req.params.id
        if(!newsId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The newsId is require'
            })
        }
        const response = await NewsService.getDetailsNews(newsId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const getAllNews = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await NewsService.getAllNews(Number(limit) || 10, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

const deleteNews = async (req, res) => {
    try {
        const newsId = req.params.id
        if(!newsId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The newsId is require'
            })
        }
        const response = await NewsService.deleteNews(newsId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createNews,
    updateNews,
    getDetailsNews,
    getAllNews,
    deleteNews,
}