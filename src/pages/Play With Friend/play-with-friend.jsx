import React from 'react'
import { Link } from 'react-router-dom'

const PlayWithFriend = () => {
    const id = '1232'
  return (
    <div className='container'>
        <Link to={`/game/${id}`} className='btn' >Host Game</Link>
        <Link to={`/join-game`} className='btn' >Join Game</Link>
    </div>
  )
}

export default PlayWithFriend