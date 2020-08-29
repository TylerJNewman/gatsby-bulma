import React from 'react'
import './style.scss'
import ProductCard from './ProductCard'
import { StaticQuery, graphql } from 'gatsby'

const productStaticQuery = graphql`
  {
    allProductsJson {
      edges {
        node {
          id
          title
          price
          thumbnail
        }
      }
    }
    allWpProduct {
      edges {
        node {
          id
          slug
          name
          shortDescription
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
          ... on WpSimpleProduct {
            onSale
            price
            regularPrice
          }
          ... on WpVariableProduct {
            onSale
            price
            regularPrice
          }
        }
      }
    }
  }
`

const Section = ({ children }) => <div className='section'>{children}</div>
const GridContainer = ({ children }) => (
  <div className='container has-text-centered py-4'>{children}</div>
)
const Grid = ({ children }) => (
  <div className='columns is-multiline pb-3'>{children}</div>
)
const Column = ({ children }) => (
  <div
    className='column is-3-desktop is-4-tablet'
    style={{
      justifyContent: 'center',
      display: 'flex'
    }}
  >
    {children}
  </div>
)

const Midsection = ({ data }) => {
  const { allProductsJson, allWpProduct } = data
  // const productData = allProductsJson.edges.map((obj) => obj.node)
  // console.log(allWpProduct)
  const productData = allWpProduct.edges.map((obj) => obj.node)
  console.log(productData)

  return (
    <Section>
      <GridContainer>
        <Grid>
          {productData.map((product) => (
            <Column key={product.id}>
              <ProductCard {...product} />
            </Column>
          ))}
        </Grid>
      </GridContainer>
    </Section>
  )
}

export default function MidsectionContainer (props) {
  return (
    <StaticQuery
      query={productStaticQuery}
      render={(data) => <Midsection data={data} {...props} />}
    />
  )
}

// export default Midsection
