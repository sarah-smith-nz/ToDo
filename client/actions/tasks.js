export const FETCH_TASKS_PENDING = 'FETCH_TASKS_PENDING'
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export function fetchTasksPending () {
  return {
    type: FETCH_TASKS_PENDING
  }
}

export function fetchTasksSuccess (todos) {
  console.log('Action:', todos)
  return {
    type: FETCH_TASKS_SUCCESS,
    todos
  }
}

export function addTaskAction (name, done) {
  return {
    type: ADD_TASK,
    todo: {
      name: name,
      done: done
    }
  }
}

export function deleteTaskAction (id) {
  return {
    type: DELETE_TASK,
    id
  }
}
