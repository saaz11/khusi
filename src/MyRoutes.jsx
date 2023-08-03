import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Show, Test } from './Test'
import First from './First'
 

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={ <First/>} />
        <Route path='test' element={<Test/>} />
        <Route path='show' element={<Show/>} />
      </Routes>
    </Router>
  )
}

export default MyRoutes