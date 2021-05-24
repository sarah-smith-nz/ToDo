import React, { useEffect } from 'react'

function Header () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header style={{ flex: 'center' }}>
        <div> <img src='/holdenRiversLogo.PNG' width ="100px" />
        </div>
        <h1 >
          To Do List</h1>

      </header>
    </>
  )
}

export default Header
