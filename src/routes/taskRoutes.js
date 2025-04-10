const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const { validateCreateTask, validateUpdateTask } = require('../middlewares/taskValidator')
const handleValidation =  require('../middlewares/handleValidation')

router.post('/tasks', validateCreateTask, handleValidation, taskController.createTask)
router.get('/tasks', taskController.getTasks)
router.get('/tasks/:id', taskController.getTaskById)
router.patch('/tasks/:id', validateUpdateTask, handleValidation, taskController.updateTask)
router.delete('/tasks/:id', taskController.deleteTask)

module.exports = router