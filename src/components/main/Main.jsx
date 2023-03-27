import { FEATURES } from "../../constants/readyForInfo"
import Title from "../titles/Titles"
import { StyledMain, StyledBrandsContainer, StyledBrand, StyledFeatures, StyledFeaturesImage, StyledFeature, StyledFeatureTitle, StyledFeatureText  } from "./styles"

const Main = () => {
    return <StyledMain>
        <StyledBrandsContainer >
            <StyledBrand src='/public/images/facebook.svg'></StyledBrand>
            <StyledBrand src='/public/images/tinder.svg'></StyledBrand>
            <StyledBrand src='/public/images/airbnb.svg'></StyledBrand>
            <StyledBrand src='/public/images/hubspot.svg'></StyledBrand>
            <StyledBrand src='/public/images/amazon.svg'></StyledBrand>
        </StyledBrandsContainer>
        <StyledFeatures>
            <Title text='Focus on solving bigger problems'/>
            <StyledFeaturesImage src="/public/images/features.svg" alt=""></StyledFeaturesImage>
            <div>
                {FEATURES.map(feature=> (
                <StyledFeature key={feature.id}>
                    <img src={feature.icon} alt="Feature Icon" />
                    <StyledFeatureTitle >{feature.title}</StyledFeatureTitle >
                    <StyledFeatureText>{feature.text}</StyledFeatureText>
                </StyledFeature>))}
            </div>
        </StyledFeatures>
    </StyledMain>



}


export default Main