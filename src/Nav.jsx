import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <ul className='d-flex bg-secondary'>
        <li><Link to='/'>Home</Link></li>
        <li to='test'>Test</li>
        <li to='show'>Show</li>
    </ul>
    </>
  )
}

export default Nav