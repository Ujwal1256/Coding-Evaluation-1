import React , {useState,useRef,useMemo} from 'react'
import courses from '../data.js'
import { Link  } from 'react-router-dom'
export default function Courses() {
    const inputRef = useRef(null);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');

    const filtered = useMemo(() => {
        return courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase())
       
 
      );
    }, [query]);

    

  return (
    <div>
      <h1>Courses</h1>
      Search Courses: 
      <input type="text"
        ref={inputRef}
      value={query}
       onChange={(e) => {
        setQuery(e.target.value);
      }} />

      <button onClick={() => inputRef.current.focus()}>Focus Input</button><br></br><br></br>
      <span>Filter By Category</span>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All</option>
        <option value="programming">Frontend</option>
        <option value="data-science">Backend</option>
        <option value="design">AI</option>
        <option value="marketing">Data</option>
      </select>

      
      <div>

      <p>Showing {filtered.length} courses</p>
      <ul>
        {
          filtered.map(course => (
            <li key={course.id}>
              <h2>{course.title}</h2> 
              <h4>Category: {course.category}</h4>
              <p>Duration: {course.duration}</p>
              <p>Level: {course.level}</p>
              <p>Price: ${course.price.toFixed(2)}</p>
              <Link to={`/course/${course.id}`}><button>View Details</button></Link  >
             < button>Save Course</button>
            </li>
          ))
        }

      </ul>
       </div>

    </div>
  )
}
