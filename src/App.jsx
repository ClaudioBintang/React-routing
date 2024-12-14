import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/index.jsx'
import Detailpage from './pages/Detailpage' 
import Login from './pages/Login'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
