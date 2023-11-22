const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')
const { authMiddleware, authUserMiddleware } = require('../middleware/authMiddleware')

router.post('/sign-up', userController.createUser)
router.post('/create-user', userController.createAdminUser)
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id',authUserMiddleware, userController.updateUser)
router.delete('/delete-user/:id', authMiddleware, userController.deleteUser)
router.post('/delete-many-user', authMiddleware, userController.deleteManyUser)
router.get('/getAll', authMiddleware, userController.getAllUser)
router.get('/get-details/:id',authUserMiddleware, userController.getDetailsUser)
router.get('/get-profile/:id', userController.getProfileUser)
router.post('/refresh-token', userController.refreshToken)
router.get('/get-all-instructor', userController.getAllInstructor)

module.exports = router
