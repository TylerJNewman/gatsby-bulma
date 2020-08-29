import React from 'react'

// const ProductCard = () => {
//   return (
//     <>
//       <li className='clearfix'>
//         <img src='http://via.placeholder.com/250x250' alt />
//         <span className='item-meta'>
//           <span className='item-name'>Red Seat</span>
//           <span className='item-price'>$45,00</span>
//         </span>
//         <span className='quantity'>
//           <input className='input is-rounded' type='number' defaultValue={1} />
//         </span>
//         <span className='remove-item'>
//           <i
//             data-feather='x'
//             className='has-simple-popover'
//             data-content='Remove from Cart'
//             data-placement='top'
//           />
//         </span>
//       </li>
//     </>
//   )
// }

const ProductCard = ({ name, image, key, price }) => (
  <div className='flat-card' style={{ padding: '1em .5em 2em', maxWidth: 284, maxWidth: 178 }}>
    {/* Product zoomable image */}
    <div className='image'>
      {console.log('thumb', image.sourceUrl)}
      <img src={image.sourceUrl} alt={name} />
    </div>
    {/* Product meta */}
    <div className='product-info has-text-centered'>
      <a href='product.html'>
        <h3 className='product-name'>{name}</h3>
      </a>
      <p className='product-price'>{price}</p>
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

export default ProductCard
