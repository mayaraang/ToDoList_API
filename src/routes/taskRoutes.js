const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const { validateTask } = require('../middlewares/taskValidator')
const handleValidation =  require('../middlewares/handleValidation')

router.post('/tasks', validateTask, handleValidation, taskController.createTask)
router.get('/tasks', taskController.getTasks)
router.get('/tasks/:id', taskController.getTaskById)
router.put('/tasks/:id', validateTask, handleValidation, taskController.updateTask)
router.delete('/tasks/:id', taskController.deleteTask)

module.exports = router