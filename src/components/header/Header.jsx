import Button from "../button/Button"
import Text from "../text/Text"
import TransparentButton from "../transparent-button/TransparentButton"
import { StyledA, StyledHeader, StyledLi, StyledLogo, StyledNav, StyledUl, StyledDiv, StyledH1, StyledSpan, StyledButton, StyledSection, StyledContainer, StyledButtonsContainer} from "./styles"


const Header = () => {
    return <StyledHeader>
        <StyledNav>
            <StyledUl>
                <StyledLogo src='/images/logo.svg'></StyledLogo>
                <StyledDiv>
                <StyledLi>
                    <StyledA>Sign in</StyledA>
                </StyledLi>
                <Button text = 'Get Started'/>
                </StyledDiv>
            </StyledUl>
        </StyledNav>
        <StyledSection>
            <StyledContainer>
        <TransparentButton text = 'Launching Infinite Workspaces.' link= 'Learn More'/>
        <StyledH1>Where the world builds <StyledSpan> software </StyledSpan></StyledH1>
        <Text width='650px' text= 'Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.' align='left'/>
        <StyledButtonsContainer>
        <Button align='0' width='300px' text='Get Started For Free'></Button>
        <StyledButton>Explore Docs</StyledButton>
        </StyledButtonsContainer>
        </StyledContainer>
        </StyledSection>
    </StyledHeader>
}


export default Header