import { FETCH_TASKS_SUCCESS, ADD_TASK, DELETE_TASK } from '../actions/tasks'

const initialState = []
function taskList (state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      console.log(action)
      return action.todos

    case ADD_TASK:
      return [...state, action.todo]

    case DELETE_TASK:
      return state.filter(task => task.id !== action.id)

    default:
      return state
  }
}

export default taskList
