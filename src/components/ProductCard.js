import React from 'react'

const ProductCard = () => {
  return (
    <>
      <li className='clearfix'>
        <img src='http://via.placeholder.com/250x250' alt />
        <span className='item-meta'>
          <span className='item-name'>Red Seat</span>
          <span className='item-price'>$45,00</span>
        </span>
        <span className='quantity'>
          <input className='input is-rounded' type='number' defaultValue={1} />
        </span>
        <span className='remove-item'>
          <i
            data-feather='x'
            className='has-simple-popover'
            data-content='Remove from Cart'
            data-placement='top'
          />
        </span>
      </li>
    </>
  )
}

export default ProductCard
