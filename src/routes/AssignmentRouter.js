const express = require('express')
const router = express.Router()
const assignmentController = require('../controllers/AssignmentController')

router.post('/create-assignment', assignmentController.createAssignment)
router.get('/details-assignment/:id', assignmentController.getDetailsAssignment)
router.post('/count-assignment/:id', assignmentController.countAssignment)

module.exports = router