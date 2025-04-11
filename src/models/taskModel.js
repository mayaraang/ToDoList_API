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
      
      const tasks = rows.map(row => ({
        ...row,
        completed: row.completed === 1
      }))

      resolve(tasks)
    })
  })
}

const getTaskById = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM tasks WHERE id = ?", [id], (err, row) => {
      if (err) return reject(err)
      if (!row) return resolve(null)

      resolve({
        ...row,
        completed: row.completed === 1
      })
    })
  })
}

const updateTask = (id, { title, description, completed }) => {
  return new Promise((resolve, reject) => {
    const fields = []
    const values = []

    if (title) {
      fields.push('title = ?')
      values.push(title)
    }
    if (description) {
      fields.push('description = ?')
      values.push(description)
    }
    if (completed !== undefined) {
      fields.push('completed = ?')
      values.push(completed ? 1 : 0)
    }
    if (fields.length === 0) {
      return resolve(null)
    }

    values.push(id)
    const query = `UPDATE tasks SET ${fields.join(', ')} WHERE id = ?`

    db.run(query, values, function(err) {
        if (err) return reject(err)
        resolve(this.changes ? { 
          id, 
          title, 
          description, 
          completed: typeof completed === 'boolean' ? completed: undefined }
        : null)
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