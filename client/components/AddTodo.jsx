import React, { useState } from 'react'
import { makeTodo } from '../apis/apiHelper'
import { useDispatch } from 'react-redux'

function AddTodo (props) {
  const [newTask, setNewTask] = useState(
    {
      name: '',
      done: ''
    }
  )

  const { name, done } = newTask
  // const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  function handleChange (e) {
    const { name, value } = e.target
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    makeTodo(dispatch, name, done)
    // console.log('makeToDo', name, done)
    setNewTask(
      {
        name: '',
        done: ''
      }
    )
  }

  return (
    <>
      <h1>Add task here</h1>
      <form>
        <input
          className='inputField'
          id='name'
          name='name'
          type='text'
          value={name}
          placeholder='Add a new task'
          onChange={handleChange}
        />
        <input
          className='inputField'
          id='done'
          name='done'
          type='number'
          value={done}
          placeholder='Status of task'
          onChange={handleChange}
        />
      </form>
      <button
        onClick={handleSubmit}
        className='button'
      >
        Submit
      </button>
    </>
  )
}

export default (AddTodo)
