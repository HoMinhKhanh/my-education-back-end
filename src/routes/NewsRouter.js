const express = require('express')
const router = express.Router()
const newsController = require('../controllers/NewsController')

router.post('/create-news', newsController.createNews)
router.put('/update-news/:id', newsController.updateNews)
router.get('/get-details-news/:id', newsController.getDetailsNews)
router.get('/get-all-news', newsController.getAllNews)
router.delete('/delete-news/:id', newsController.deleteNews)


module.exports = router