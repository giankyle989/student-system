import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black p-4'>
      <ul className='flex gap-x-2 justify-end'>
        <li><a href="">Home</a></li>
        <li><a href="/create">Create</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="">Logout</a></li>
      </ul>
    </div>
  )
}

export default Navbar