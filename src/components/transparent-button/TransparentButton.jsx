import { StyledTransparentButton, StyledTransparentButtonA, StyledArrow,StyledTransparentButtonContainer } from "./styles"

const TransparentButton  = ({text, link}) => {
    return <StyledTransparentButtonContainer><StyledTransparentButton>{text}<StyledTransparentButtonA>{link} <StyledArrow src='/public/images/arrow-right-blue.svg'></StyledArrow></StyledTransparentButtonA></StyledTransparentButton></StyledTransparentButtonContainer>
}

export default TransparentButton