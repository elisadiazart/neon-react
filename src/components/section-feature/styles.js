import styled from "styled-components"

const StyledFeatures = styled.section`
padding: 0 1rem;

    @media screen and (min-width: 1024px) {
        padding: 0 22rem;
        margin-bottom: 1rem;
    }
`


const StyledFeaturesImage = styled.img`
    width: 100%;
    margin: 3rem 0;
`

const StyledDiv = styled.div`
    @media screen and (min-width: 1024px) {
        display: flex;
    }
`


export { StyledFeatures, StyledFeaturesImage, StyledDiv}