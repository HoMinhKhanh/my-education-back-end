const express = require('express')
const router = express.Router()
const assignmentController = require('../controllers/AssignmentController')

router.post('/create-assignment', assignmentController.createAssignment)
router.put('/update-assignment/:id', assignmentController.updateAssignment)
router.get('/details-assignment/:id', assignmentController.getDetailsAssignment)
router.delete('/delete-assignment/:id', assignmentController.deleteAssignment)
router.post('/delete-many-assignment', assignmentController.deleteManyAssignment)
router.post('/count-assignment/:id', assignmentController.countAssignment)

module.exports = router