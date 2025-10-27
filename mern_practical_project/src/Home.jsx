import { useNavigate } from 'react-router-dom'
import './App.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to Website</h1>
      <button
        className="user-button"
        onClick={() => navigate('/users')}
      >
        Users
      </button>
    </div>
  )
}

export default Home
