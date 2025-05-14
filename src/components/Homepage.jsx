import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const [id, setid] = useState(null)
    const navigate=useNavigate()
const handlejoin = () => {
  if (id) {
    navigate(`/room/${id}`);
  } else {
    alert("Please enter a room ID");
  }
};

  return (
       <div className='videoapp'>
    <div className='box'>
    <input onChange={(e)=>{setid(e.target.value)}} className='input' placeholder='Enter your code' />
    <button onClick={handlejoin} className='btn'>Join now</button>
    </div>

   </div>
  )
}

export default Homepage