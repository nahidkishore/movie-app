import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className='container mt-5'>
      <h3> 404! Page Not Found</h3>
      <Link to='/' className='btn btn-dark mt-5'>
        Go back
      </Link>
    </div>
  );
};

export default PageNotFound;
