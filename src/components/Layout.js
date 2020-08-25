import React from 'react'

import './style.scss'
import Helmet from './Helmet'
import Header from './Header'
import Midsection from './Midsection'
import Footer from './Footer'

const Container = ({ children }) => (
  <div className='container'>{children}</div>
)
const Main = ({ children }) => (
  <main style={{ paddingBottom: '4%', maxWidth: 1270 }}>{children}</main>
)

const Layout = ({ children }) => (
  <Container>
    <Helmet />
    <Main>
      <Header />
      <Midsection />
    </Main>
    <Footer />
  </Container>
)

export default Layout
