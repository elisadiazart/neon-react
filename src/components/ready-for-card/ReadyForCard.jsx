import {StyledFeature, StyledFeatureTitle, StyledFeatureText  } from "./styles"
import { FEATURES } from "../../constants/readyForInfo"


const ReadyForCard = () => {
    return <>{FEATURES.map(feature=> (
        <StyledFeature key={feature.id}>
            <img src={feature.icon} alt="Feature Icon" />
            <StyledFeatureTitle >{feature.title}</StyledFeatureTitle >
            <StyledFeatureText>{feature.text}</StyledFeatureText>
        </StyledFeature>))}
        </>
}

export default ReadyForCard