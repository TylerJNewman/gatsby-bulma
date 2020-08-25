import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from './Emoji'
import footerLinks from './footerLinks'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
            instagram
            facebook
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
                {footerLinks.map(({ title, href }, key) => (
                  <a href={href} className='level-item' key={key}>
                    {title}
                  </a>
                ))}
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
