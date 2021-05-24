import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import Task from './Task'
import { fetchTasks, deleteTodo } from '../apis/apiHelper'
// import { deleteTasks } from '../apis/tasksapi'
// import { getTask } from './TaskHelper'

function TaskList (props) {
  const todos = useSelector(globalState => globalState.taskList)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchTasks(dispatch)
  }, [])

  // console.log('todo in component', todos)

  function handleDelete (id) {
    deleteTodo(dispatch, id)
  }
  return (
    <div >
      <div className='todoList'>
        {todos && todos.length > 0 && todos.map(todo => {
          return (

            <div key={todo.id}>
              <p> {todo.name}  {todo.done}<button onClick={() => handleDelete(todo.id)}><img src='/delete.png' width ="20px" /></button></p>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default (TaskList)
