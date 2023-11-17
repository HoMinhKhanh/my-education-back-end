const express = require('express')
const router = express.Router()
const courseController = require('../controllers/CourseController')

router.post('/create-course', courseController.createCourse)
router.put('/update-course/:id', courseController.updateCourse)
router.get('/details-course/:id', courseController.getDetailsCourse)
router.get('/get-all-course', courseController.getAllCourse)
router.get('/get-all-course-instructor/:id', courseController.getAllCourseInstructor)
router.delete('/delete-course/:id', courseController.deleteCourse)
router.post('/delete-many-course', courseController.deleteManyCourse)

module.exports = router