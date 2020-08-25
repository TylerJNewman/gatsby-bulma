import React from 'react'
import Logo from '../images/Ariana-Grande.png'
import './style.scss'

const Navbar = () => (
  <nav className='navbar'>
    <div className='container'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='#' style={{ maxHeight: '38px' }}>
          <img
            style={{
              padding: 6,
              maxHeight: 39,
              display: 'block'
            }}
            src={Logo}
            alt='Logo'
          />
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
            help & support
          </a>
          <a href='#' className='navbar-item'>
            delivery
          </a>
          <a href='#' className='navbar-item'>
            terms & conditions
          </a>
          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>about</a>
            <div className='navbar-dropdown'>
              <a href='#' className='navbar-item navbar-item-dropdown'>
                me
              </a>
              <a href='#' className='navbar-item navbar-item-dropdown'>
                company
              </a>
            </div>
          </div>
          <a href='#' className='navbar-item'>
            login
          </a>
        </div>
        <div>
          {/* <div className='navbar-item'>
            <a href='#' className='button is-primary'>
              Sign up
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar