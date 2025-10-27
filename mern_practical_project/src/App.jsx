import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './Users.jsx'
import Home from './Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
