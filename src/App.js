import React from 'react'
import CampusPage from './components/CampusPage'
import FooterPage from './components/FooterPage'
import HomePage from './components/HomePage'
import StudentPage from './components/StudentPage'

const App = () => {
  return (
    <div>
      <HomePage/>
      <CampusPage/>
      <StudentPage/>
      <FooterPage/>
    </div>
  )
}

export default App