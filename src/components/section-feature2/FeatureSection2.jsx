import Check from "../check/Check"
import Text from "../text/Text"
import Title from "../titles/Titles"
import { StyledCheckContainer, StyledImg, StyledSection, StyledDiv, StyledContainer, StyledTextContainer } from "./styles"

const FeatureSection2 = () => {
    return <StyledSection> 
    <StyledDiv>
    <Title text='Use sensitive data without sacrificing privacy'/>
    <Text text= 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.'/>
    </StyledDiv>
    <StyledContainer>
    <StyledImg src="/images/features-02.png" alt="" />
    <StyledTextContainer>
    <Title align ='left' text='Standardized dev environments'/>
    <Text align ='left' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
    <StyledCheckContainer>
        <Check text= 'Performance reviews'/>
        <Check text= 'Objectives and goal setting'/>
        <Check text= 'Manager check-ins'/>
    </StyledCheckContainer>
    </StyledTextContainer>
    </StyledContainer>
    </StyledSection>
}

export default FeatureSection2