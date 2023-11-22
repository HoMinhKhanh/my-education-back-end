const express = require('express')
const router = express.Router()
const answerController = require('../controllers/AnswerController')

router.post('/create-answer', answerController.createAnswer)
router.get('/details-answer/:id', answerController.getDetailsAnswer)
router.post('/count-answer', answerController.countAnswer)

module.exports = router