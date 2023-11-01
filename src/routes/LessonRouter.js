const express = require('express')
const router = express.Router()
const lessonController = require('../controllers/LessonController')

router.post('/create-lesson', lessonController.createLesson)
router.put('/update-lesson/:id', lessonController.updateLesson)
router.get('/details-lesson/:id', lessonController.getDetailsLesson)
router.get('/get-all-lesson', lessonController.getAllLesson)
router.delete('/delete-lesson/:id', lessonController.deleteLesson)
router.post('/delete-many-lesson', lessonController.deleteManyLesson)


module.exports = router