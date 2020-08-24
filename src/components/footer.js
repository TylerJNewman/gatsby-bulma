import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from './Emoji'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={(data) => (
      <footer className='footer'>
        <div className='container has-text-centered'>
          <div className='columns is-centered'>
            <div className='column is-8'>
              <div className='level'>
                <a href='#' className='level-item'>
                  Features
                </a>
                <a href='#' className='level-item'>
                  Enterprise
                </a>
                <a href='#' className='level-item'>
                  Support
                </a>
                <a href='#' className='level-item'>
                  ICO
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className='subtitle is-6'>
            © 2020 Cannabunny <Emoji emoji='🐰' />
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
