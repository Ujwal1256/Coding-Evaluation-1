import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/courses');
    }

        
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
    <button onClick={handleClick}>Explore Courses</button>
    </div>
  )
}
