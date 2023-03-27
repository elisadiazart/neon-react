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
    width: 400px;
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(156, 163, 175, 0.11);

`

const StyledBrand = styled.img`
    height: ${({ height }) => height};
`

const StyledFeatures = styled.section``


const StyledFeaturesImage = styled.img`
    width: 100%;
    margin: 3rem 0;
`

const StyledFeature = styled.div`
    text-align: center;
    margin: 0 1rem;
    margin-bottom: 3rem;

`

const StyledFeatureTitle = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;

`


const StyledFeatureText = styled.p`
    font-size: 1.1rem;
    margin: 1rem 0;
    color: #9CA3AF;
    padding: 0 2rem;
    line-height: 1.5;

`

export {StyledMain, StyledBrandsContainer, StyledBrand, StyledFeatures, StyledFeaturesImage, StyledFeature, StyledFeatureTitle, StyledFeatureText }