import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (

    <Container>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="models4.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />

        <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="modely2.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />

        <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model34.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />

        <Section 
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="modelx2.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />

        <Section 
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar1.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />

        <Section 
          title="Solar for New Roofs"
          description="Solar Roofs Less Than a New Roof Plus Solar Panels"
          backgroundImg="roofs2.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />

        <Section 
          title="Accessories"
          description=""
          backgroundImg="accessories2.jpg"
          leftBtnText="Order Now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;