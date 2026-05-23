import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h3><Link to="/">Back to Home</Link></h3>

    </div>
  )
}
