import { StyledTab } from "./styles"

const Tab = ({text, setValue, index}) => {
    return <StyledTab onClick={() =>setValue(index)}>{text}</StyledTab>
}

export default Tab