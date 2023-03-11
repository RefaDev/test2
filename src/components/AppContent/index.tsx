import Certification from 'pages/Certification/Certification'
import Case from 'pages/Cases/Case'
import Home from 'pages/Home/Home'
import Integration from 'pages/Integration/Integration'
import Services from 'pages/Services/Services'
import Vidgets from 'pages/Vidgets/Vidgets'
import { Routes, Route } from 'react-router-dom'

const AppContent = () => {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/integration' element={<Integration />} />
      <Route path='/vidgets' element={<Vidgets />} />
      <Route path='/case' element={<Case />} />
      <Route path='/certification' element={<Certification />} />
    </Routes>
  )
}

export default AppContent
