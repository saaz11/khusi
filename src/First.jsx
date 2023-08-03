import React from 'react'
import './first.css'
import Nav from './Nav'



const First = () => {
  return (
    <div>
      <Nav/>
        <h1 className='title'>This is First component</h1>
        <h1 className='text-success bg-warning p-2'>We are using functional component</h1>
    </div>
  )
}

export default First