import { getTasks, addTasks, deleteTasks } from './tasksapi'
import { fetchTasksSuccess, addTaskAction, deleteTaskAction } from '../actions/tasks'
// import request from 'superagent'

export function fetchTasks (dispatch) {
  return getTasks()
    // .then((res) => {
    //   dispatch(fetchTasksPending())
    //   return res
    // })
    .then((res) => {
      dispatch(fetchTasksSuccess(res))
      // console.log('in fetch')
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

export function makeTodo (dispatch, name, done) {
  return addTasks(name, done)
    .then(() => {
      dispatch(addTaskAction(name, done))
      return null
    })
    .then(() => {
      fetchTasks(dispatch)
      return null
    })
}

export function deleteTodo (dispatch, id) {
  return deleteTasks(id)
    .then(() => {
      dispatch(deleteTaskAction(id))
      return null
    })
    .then(() => {
      fetchTasks(dispatch)
      return null
    })
}
