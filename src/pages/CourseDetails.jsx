import React from 'react'
import {useParams,Link} from 'react-router-dom'
import courses from '../data'

export default function CourseDetails() {
    const {courseId} = useParams();
    const course = courses.find(c => c.id === Number(courseId));
  return (
    <div>
      <h1>Course Details</h1>
      {course ? (
        <>
          <h2>{course.title}</h2>
          <p>Category: {course.category}</p>          
          <p>Duration: {course.duration}</p>
          <p>Level: {course.level}</p>
          <p>Price: ${course.price.toFixed(2)}</p>
           <p>{course.description}</p>
            < button>Save Course</button>

            <Link to="/courses">
              <button >Back to Courses</button>
            </Link>
        </>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  )
}
