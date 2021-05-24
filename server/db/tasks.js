const connection = require('./connection')

function getTasks (db = connection) {
  return db('todos')
    .then(result => {
      return result
    })
}

function addTasks (newTask, db = connection) {
  return db('todos')
    .insert(newTask)
    .then(([id]) => {
      return {
        id,
        ...newTask
      }
    })
}

function updateTasks (task, db = connection) {
  return db('todos')
    .where('id', task.id)
    .update(task)
    .then(() => {
      return task
    })
}

function deleteTasks (id, db = connection) {
  return db('todos')
    .where('id', id)
    .del()
}

module.exports = {
  getTasks,
  addTasks,
  updateTasks,
  deleteTasks
}
