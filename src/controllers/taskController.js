const Task = require('../models/taskModel')

const createTask = (req, res) => {
  const { title, description } = req.body

  Task.createTask(title, description)
    .then(task => res.status(201).json(task))
    .catch(err => res.status(500).json({ error: err.message }))
}

const getTasks = (req, res) => {
  Task.getTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: err.message }))
}

const getTaskById = (req, res) => {
  const { id } = req.params

  Task.getTaskById(id)
    .then(task => {
      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' })
      }
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json({ error: err.message }))
}

const updateTask = (req, res) => {
  const { id } = req.params
  const { title, description, completed } = req.body

  Task.updateTask(id, { title, description, completed })
    .then(task => {
      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' })
      }
      res.status(200).json(task)
    })
    .catch(err => res.status(500).json({ error: err.message }))
}

const deleteTask = (req, res) => {
  const { id } = req.params

  Task.deleteTask(id)
    .then(success => {
      if (!success) {
        return res.status(404).json({ error: 'Tarefa não encontrada' })
      }
      res.status(204).send()
    })
    .catch(err => res.status(500).json({ error: err.message }))
}

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask }