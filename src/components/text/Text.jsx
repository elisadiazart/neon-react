import { StyledText } from "./styles"

const Text = ({text, align, width}) => {
    return <StyledText width={width} align={align}>{text}</StyledText>
}

export default Text