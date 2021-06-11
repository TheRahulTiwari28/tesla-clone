import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order online for Touchless Delivary"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description="Order online for Touchless Delivary"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section 
                title="Model X"
                description="Order online for Touchless Delivary"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order online for Touchless Delivary"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtntext="Existing Inventory"
            />
            <Section 
                title="Solar Panels At lowest Cost"
                description="Money-Back Gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Oder Now"
                rightBtntext="learn More"
            />
            <Section 
                title="Solar New Roof"
                description="Solar Roof Costs less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Oder Now"
                rightBtntext="learn More"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                // rightBtntext="learn More"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`