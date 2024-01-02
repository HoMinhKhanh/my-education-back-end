const express = require('express')
const router = express.Router()
const answerController = require('../controllers/AnswerController')

router.post('/create-answer', answerController.createAnswer)
router.put('/update-answer/:id', answerController.updateAnswer)
router.get('/details-answer/:id', answerController.getDetailsAnswer)
router.delete('/delete-answer/:id', answerController.deleteAnswer)
router.post('/delete-many-answer', answerController.deleteManyAnswer)
router.post('/count-answer', answerController.countAnswer)
router.post('/count-answer-instructor', answerController.countAnswerInstructor)

module.exports = router