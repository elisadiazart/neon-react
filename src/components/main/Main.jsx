import FeatureSection from "../section-feature/FeatureSection"
import FeatureSection2 from "../section-feature2/FeatureSection2"
import SectionLogos from "../section-logos/SectionLogos"
import SectionPrices from "../section-prices/SectionPrices"
import SectionReviews from "../section-reviews/SectionReviews"
import SectionTabs from "../section-tabs/SectionTabs"
import { StyledMain,} from "./styles"

const Main = () => {
    return <StyledMain>
        <SectionLogos/>
        <FeatureSection/>
        <FeatureSection2/>
        <SectionPrices/>
        <SectionReviews/>
        <SectionTabs/>
    </StyledMain>
}


export default Main