import React from 'react'
import './style.scss'
import ProductCard from './ProductCard'
import { useStaticQuery, graphql } from 'gatsby'

const productStaticQuery = graphql`
  {
    # allProductsJson {
    #   edges {
    #     node {
    #       id
    #       name
    #       price
    #       image {
    #         id
    #         localFile {
    #           childImageSharp {
    #             fluid(maxWidth: 910) {
    #               ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #             }
    #           }
    #         }
    #         altText
    #       }
    #     }
    #   }
    # }
    allWpProduct {
      edges {
        node {
          id
          slug
          name
          shortDescription
          image {
            id
            localFile {
              childImageSharp {
                fluid(maxHeight: 178, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            altText
          }
          galleryImages {
            nodes {
              id
              localFile {
                childImageSharp {
                  fluid(maxHeight: 178, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
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

const Midsection = () => {
  const data = useStaticQuery(productStaticQuery)
  const { allWpProduct } = data
  const productData = allWpProduct.edges.map((obj) => obj.node)

  // demo projects from local file
  // const { allProductsJson } = data
  // const productData = allProductsJson.edges.map((obj) => obj.node)
  // console.log(productData)

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

// export default function MidsectionContainer (props) {
//   return (
//     <StaticQuery
//       query={productStaticQuery}
//       render={(data) => <Midsection data={data} {...props} />}
//     />
//   )
// }

export default Midsection
