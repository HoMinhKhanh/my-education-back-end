const express = require('express')
const router = express.Router()
const myCourseController = require('../controllers/MyCourseController')

router.post('/create-my-course', myCourseController.createMyCourse)
router.get('/get-my-course/:id', myCourseController.getMyCourse)

module.exports = router