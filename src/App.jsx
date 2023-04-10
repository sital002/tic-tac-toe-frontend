import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/home'
import './App.css'
import PlayWithFriend from './pages/Play With Friend/play-with-friend'
import JoinGame from './pages/Join Game/join-game'
import GameArea from './pages/Game Area/game-area'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/play-with-friend'  element={<PlayWithFriend/>}/>
        <Route path='/join-game'  element={<JoinGame/>}/>
        <Route path='/game/:id'  element={<GameArea/>}/>
        <Route path='/*'  element={<h1 className='container'>Page Not found</h1>}/>
      </Routes>
    </div>
  )
}

export default App