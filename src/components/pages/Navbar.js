import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
    <div className="container">
    <Link to='/' className='brand-logo'>
        Movie App
      </Link>
      </div>
</nav>

   
  );
};

export default Navbar;
