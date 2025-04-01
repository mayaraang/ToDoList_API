const db = require('../config/database')

const createTask = (title, description) => {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)", 
      [title, description, false], function(err) {
        if (err) return reject(err)
        resolve({ id: this.lastID, title, description, completed: false })
    })
  })
}

const getTasks = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
      if (err) return reject(err)
      resolve(rows)
    })
  })
}

const getTaskById = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
      if (err) return reject(err)
      resolve(row)
    })
  })
}

const updateTask = (id, title, description, completed) => {
  return new Promise((resolve, reject) => {
    db.run("UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?", 
      [title, description, completed, id], function(err) {
        if (err) return reject(err)
        resolve(this.changes ? { id, title, description, completed } : null)
    })
  })
}

const deleteTask = (id) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM tasks WHERE id = ?", [id], function(err) {
      if (err) return reject(err)
      resolve(this.changes > 0)
    })
  })
}

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask }