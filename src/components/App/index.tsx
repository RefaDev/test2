import AppContent from 'components/AppContent'
import { BrowserRouter as Router } from 'react-router-dom'

import 'reset.css'
import 'styles/app.scss'
function App() {
  return (
    <div className='wrapper'>
      <Router>
        <AppContent />
      </Router>
    </div>
  )
}

export default App
