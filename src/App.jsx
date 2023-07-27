import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Destination from '../src/pages/Destination'
import Crew from '../src/pages/Crew'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
      </Routes>
    </Router>
  )
}

export default App

