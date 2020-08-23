import React from 'react';

const Navbar = () => (
  <nav className='navbar'>
    <div className='container'>
      <div className='navbar-brand is-active'>
        <a href='#' className='navbar-item'>
          Pied Piper
        </a>
        <a
          role='button'
          aria-label='menu'
          aria-expanded='false'
          className='navbar-burger'
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <a href='#' className='navbar-item'>
            Features
          </a>
          <a href='#' className='navbar-item'>
            Enterprise
          </a>
          <a href='#' className='navbar-item'>
            Support
          </a>
          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>ICO</a>
            <div className='navbar-dropdown'>
              <a href='#' className='navbar-item navbar-item-dropdown'>
                Whitepaper
              </a>
              <a href='#' className='navbar-item navbar-item-dropdown'>
                Token
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className='navbar-item'>
            <a href='#' className='button is-primary'>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
