import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='logo' style={{ width: '35px' }} />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link active text-uppercase '
                aria-current='page'
                to='/'>
                Home <i className='fas fa-home' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-uppercase ml-5' to='/news'>
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-uppercase ml-5' to='/contacts'>
                conact us
              </Link>
            </li>
          </ul>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-primary ml-2' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
