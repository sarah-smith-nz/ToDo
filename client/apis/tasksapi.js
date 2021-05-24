import request from 'superagent'
const taskUrl = '/api/v1/tasks/'

export function getTasks () {
  // console.log('here')
  return request
    .get(taskUrl)
    .then(res => {
      // console.log(res.body)
      return res.body.todos
    })
}

export function addTasks (n, d) {
  const data = { name: n, done: d }
  // console.log('AddTask:', data)
  return request
    .post(taskUrl)
    .send(data)
    .then(response => {
      // console.log('addTask', response)
      return response.body
    })
    .catch(err => console.error(err))
}

export function updatetasks (newTask) {
  return request
    .patch(taskUrl + newTask)
    .send(newTask)
    .then(response => response.body)
    .catch(err => console.error(err))
}

export function deleteTasks (id) {
  console.log(id)
  return request
    .del(taskUrl + id)
    .then(response => response.body)
    .catch(err => console.error(err))
}
