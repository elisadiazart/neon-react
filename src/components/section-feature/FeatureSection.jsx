import {StyledFeatures, StyledFeaturesImage} from "./styles"
import Title from "../titles/Titles"
import ReadyForCard from "../ready-for-card/ReadyForCard"

const FeatureSection = () => {
    return <StyledFeatures>
    <Title text='Focus on solving bigger problems'/>
    <StyledFeaturesImage src="/images/features.svg" alt=""></StyledFeaturesImage>
    <div>
        <ReadyForCard/>
    </div>
</StyledFeatures>

}

export default FeatureSection