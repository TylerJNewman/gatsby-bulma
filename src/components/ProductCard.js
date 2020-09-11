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

const ProductCard = ({ id, name, image, key, price }) => (
  <div className='flat-card' style={{ padding: '1em .5em 2em', maxWidth: 286 }}>
    {/* Product zoomable image */}
    <div className='image'>
      <img src={image.sourceUrl} alt={name} style={{ maxHeight: 178 }} />
    </div>
    {/* Product meta */}
    <div className='product-info has-text-centered'>
      <a
        href='/'
        className='Product snipcart-add-item'
        data-item-id={id}
        data-item-price={price.slice(1)}
        // // data-item-description='High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.'
        data-item-image={image.sourceUrl}
        data-item-name={name}
        data-item-url='https://cannabunny-store.netlify.app/'
      >
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
