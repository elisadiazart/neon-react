import Button from "../button/Button"
import { StyledA, StyledHeader, StyledLi, StyledLogo, StyledNav, StyledUl } from "./styles"


const Header = () => {
    return <StyledHeader>
        <StyledNav>
            <StyledUl>
                <StyledLogo src='./public/images/logo.svg'></StyledLogo>
                <StyledLi>
                    <StyledA>Sign in</StyledA>
                </StyledLi>
                <Button text = 'Get Started'/>
            </StyledUl>
        </StyledNav>
    </StyledHeader>
}


export default Header