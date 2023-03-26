import styled from "styled-components"

const StyledMain = styled.main`
    margin: 0 1rem;


`

const StyledBrandsContainer = styled.div`
    display: flex;
    gap: 1rem 4rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(156, 163, 175, 0.11);

`

const StyledBrand = styled.img`
    height: ${({ height }) => height};
`

const StyledFeatures = styled.section``


const StyledFeaturesImage = styled.img`
    width: 100%;
    margin: 3rem 0
`

export {StyledMain, StyledBrandsContainer, StyledBrand, StyledFeatures, StyledFeaturesImage}