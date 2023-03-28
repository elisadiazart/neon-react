import { v4 } from "uuid"
import { PRICES } from "../../constants/prices"
import Button from "../button/Button"
import Check from "../check/Check"
import Text from "../text/Text"
import Title from "../titles/Titles"
import { StyledDescription, StyledInclude, StyledNumber, StyledPerX, StyledPrice, StyledPricesSection, StyledRealPrice, StyledTitle, StyledPopUp } from "./styles"

const SectionPrices = () => {
    return <StyledPricesSection>
        <Title text="Find a plan that's right for you"/>
        <Text text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."/>
        <div>
        {PRICES.map(card=> (
        <StyledPrice key={card.key} background={card.color}>
            <StyledPopUp display={card.display}><img src="/public/images/fire.svg" alt="Popular" /> Most popular</StyledPopUp>
            <StyledTitle>{card.title}</StyledTitle>
            <StyledRealPrice>$<StyledNumber>{card.number}</StyledNumber><StyledPerX>/mo</StyledPerX></StyledRealPrice>
            <StyledDescription>For teams building apps for many public & private users.</StyledDescription>
            <Button text='Start Free Trial' width='100%'/>
            <StyledInclude>{card.include}</StyledInclude>
            {card.checklist.map(check => (
                <Check key={v4()} text={check}/>
            ))}
        </StyledPrice>
        ))}
        </div>
    </StyledPricesSection>
}


export default SectionPrices