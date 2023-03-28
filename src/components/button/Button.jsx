import { StyledButton, StyledImg } from "./styles"

const Button = ({text, width}) => {
    return <StyledButton width ={width}>{text}<StyledImg src= '/images/arrow-right-button.svg'></StyledImg></StyledButton>
}

export default Button