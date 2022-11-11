import React from 'react'
import { useAuth } from '../../context/Auth'

const Board = () => {
  const {currentUser} = useAuth()
  return (
    <div>
      <p>{currentUser?.email}</p>
    </div>
  )
}

export default Board