import React from 'react'
import './style.scss'
import productData from './productData'
import ProductCard from './ProductCard'

const Section = ({ children }) => <div className='section'>{children}</div>
const GridContainer = ({ children }) => (
  <div className='container has-text-centered py-4'>{children}</div>
)
const Grid = ({ children }) => (
  <div className='columns is-multiline pb-3'>{children}</div>
)
const Column = ({ children, key }) => (
  <div className='column is-3-desktop is-4-tablet ' key={key}>
    {children}
  </div>
)

const Midsection = () => (
  <Section>
    <GridContainer>
      <Grid>
        {productData.map((products, key) => (
          <Column key={key}>
            <ProductCard {...products} />
          </Column>
        ))}
      </Grid>
    </GridContainer>
  </Section>
)

export default Midsection
