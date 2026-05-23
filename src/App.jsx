import React from 'react'
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import SavedCourses from './pages/SavedCourses'
import About from './pages/About'
import NotFound from './pages/NotFound'
import CourseDetails from './pages/CourseDetails'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


export default function App() {

  const {isDarkMode, toggleTheme, themeStyles} = useContext(ThemeContext)
  return (
    <div style={themeStyles}>
      <BrowserRouter>
        <h1>Course  App </h1>
        <nav>
           <Link to="/">Home</Link>
           <Link to="/courses">Courses</Link>
           <Link to="/saved-courses">Saved Courses</Link>
           <Link to="/about">About</Link>
            <button onClick={toggleTheme}>{isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}</button>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/saved-courses" element={<SavedCourses />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}
