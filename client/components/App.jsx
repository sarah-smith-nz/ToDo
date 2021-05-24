import React from 'react'

import Header from './Header'
import TaskList from './TaskList'
import AddTodo from './AddTodo'
import Footer from './Footer'

function App () {
  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      <div>
        <TaskList/>
      </div>
      <AddTodo
      />
      <div>    <Footer />
      </div>
    </div>
  )
}

export default App
