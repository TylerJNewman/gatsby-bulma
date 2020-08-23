import React from 'react'
import './style.scss'
import { chunk } from '../utils'

import productData from './productData'

const numberOfColumns = 4
const numberOfProducts = productData.length
const numberOfRows = Math.ceil(numberOfProducts / numberOfColumns)
const columns = chunk(productData, numberOfRows) // products grouped into array of four

const ProductCard = ({ title, imgSrc, key }) => (
  <div className='flat-card' key={key}>
    {/* Product zoomable image */}
    <div className='image'>
      <img src={imgSrc} alt />
    </div>
    {/* Product meta */}
    <div className='product-info has-text-centered'>
      <a href='product.html'>
        <h3 className='product-name'>{title}</h3>
      </a>
      <p className='product-description'>Lorem ipsum sit dolor amet</p>
      <p className='product-price'>45,00</p>
    </div>
    {/* Product actions */}
    <div className='actions'>
      <div className='add'>
        <i
          data-feather='shopping-cart'
          className='has-simple-popover'
          data-content='Add to Cart'
          data-placement='top'
        />
      </div>
      <div className='like'>
        <i
          data-feather='heart'
          className='has-simple-popover'
          data-content='Add to Wishlist'
          data-placement='top'
        />
      </div>
    </div>
  </div>
)

const Column = ({ children, key }) => (
  <div className='column' key={key}>
    {children}
  </div>
)

const Midsection = () => (
  <div>
    <section className='section'>
      <div className='container has-text-centered py-4'>
        <h2 className='title mb-6'>Products</h2>
        <div className='columns'>
          {console.log(columns)}
          {columns.map((column, key) => (
            <Column key={key}>
              {column.map((products, key) => (
                <ProductCard key={key} {...products} />
              ))}
            </Column>
          ))}
        </div>
      </div>
    </section>
  </div>
)

export default Midsection
