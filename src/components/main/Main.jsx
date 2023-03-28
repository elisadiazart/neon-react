import FeatureSection from "../section-feature/FeatureSection"
import FeatureSection2 from "../section-feature2/FeatureSection2"
import SectionLogos from "../section-logos/SectionLogos"
import SectionPrices from "../section-prices/SectionPrices"
import SectionReviews from "../section-reviews/SectionReviews"
import { StyledMain,} from "./styles"

const Main = () => {
    return <StyledMain>
        <SectionLogos/>
        <FeatureSection/>
        <FeatureSection2/>
        <SectionPrices/>
        <SectionReviews/>
    </StyledMain>
}


export default Main