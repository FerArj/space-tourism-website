import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Destination from '../src/pages/Destination'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
      </Routes>
    </Router>
  )
}

export default App

