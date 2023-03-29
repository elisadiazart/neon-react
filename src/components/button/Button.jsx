import { StyledButton, StyledImg } from "./styles"

const Button = ({text, width, align}) => {
    return <StyledButton width ={width} align={align}>{text}<StyledImg src= '/images/arrow-right-button.svg'></StyledImg></StyledButton>
}

export default Button