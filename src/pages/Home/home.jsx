import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome to Tic Tac Toe</h1>
      <Link to={'/'} className='btn' >Start Game</Link>
      <Link to={'/play-with-friend'} className='btn' >Play With Friend</Link>
      <Link to={'/'} className='btn' >Options</Link>
      <Link to={'/'} className='btn' >Exit</Link>
    </div>
  )
}
