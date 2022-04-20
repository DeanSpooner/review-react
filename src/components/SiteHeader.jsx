import React from 'react';
import { Link } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <div>
      <Link to="/">
        <h1>Dean's Reviews</h1>
      </Link>
    </div>
  )
}

export default SiteHeader