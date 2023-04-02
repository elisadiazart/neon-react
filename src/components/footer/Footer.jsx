import { v4 } from "uuid"
import { FOOTER } from "../../constants/footerInfo"
import Button from "../button/Button"
import Title from "../titles/Titles"
import { StyledAdvertisment, StyledText, StyledLi, StyledA, StyledNav, StyledDiv, StyledDivText, StyledUl, StyledLinkContainer } from "./styles"

const Footer = () => {
    return <footer>
        <StyledAdvertisment>
            <StyledDivText>
            <Title align='left' text='Get started with Neon'/>
            <StyledText>It only takes a few minutes to get started with Neon. Understand your users, start free, today.</StyledText>
            </StyledDivText>
            <Button text='Start Free Trial' width='400px'/>
        </StyledAdvertisment>
        <StyledNav>
            <StyledUl>
                <li>
                    <img src="/images/logo.svg" alt="" />
                    <StyledDiv>
                        <a href="">Terms</a>
                        <span>·</span>
                        <a href="">Privacy Policy</a>
                    </StyledDiv>
                </li>
                <StyledLinkContainer>
                {FOOTER.map(li => (
                    <StyledLi key={li.key}>{li.title}
                    {li.a.map(a => (
                        <StyledA key= {v4()}>{a}</StyledA>
                    ))}
                    </StyledLi>
                ))}
                </StyledLinkContainer>
            </StyledUl>
        </StyledNav>
    </footer>
}

export default Footer