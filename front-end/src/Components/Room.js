import React from 'react'

function Room({ room }) {
  return (
    <div>
        <h1>{room.room_name}</h1>
        <p>{room.capacity}</p>
        <p>{room.floor}</p>
    </div>
  )
}

export default Room