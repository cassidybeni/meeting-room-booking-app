import React from 'react'

function Room({ room }) {
  return (
    <div>
        <h1>Room Name: {room.room_name}</h1>
        <p>Capacity: {room.capacity}</p>
        <p>Floor: {room.floor}</p>
    </div>
  )
}

export default Room