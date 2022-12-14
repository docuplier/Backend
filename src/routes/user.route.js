const { Router } = require('express')
const userController = require('../controllers/user.controller')

const router = Router()

router.post('/signup', userController.signup)
router.post('/verify', userController.verify)
router.route('/').get(userController.getAll)

router
	.route('/:id')
	.put(userController.update)

module.exports = router
