import React, { useState } from 'react'

function JoinGame() {
    const [roomId, setRoomId] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!roomId) return;
        
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the room Id' value={roomId} onChange={e=>setRoomId(e.currentTarget.value)}  />
        <button className='join-btn'>Join</button>
        </form>
    </div>
  )
}

export default JoinGame