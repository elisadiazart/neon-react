import { StyledDiv, StyledIcon, StyledP } from "./styles"

const Check = ({text}) => {
    return <StyledDiv>
        <StyledIcon src="/images/check.svg" alt="check" />
        <StyledP>{text}</StyledP>
    </StyledDiv>
}

export default Check