import React from 'react'

import './style.scss'
import Helmet from './Helmet'
import Header from './Header'
import Midsection from './Midsection'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className='container is-fluid'>
    <Helmet />
    <Header />
    <Midsection />
    <Footer />
  </div>
)

export default Layout
