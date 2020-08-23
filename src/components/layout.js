import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Midsection from './midsection';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className='container is-fluid'>
    <Helmet />
    <Header />
    <Midsection />
    <Footer />
  </div>
)

export default Layout
