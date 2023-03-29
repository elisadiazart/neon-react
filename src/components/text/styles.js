import styled from "styled-components"

const StyledText = styled.p`
    color: #9CA3AF;
    font-size: 1.2rem;
    text-align: center;
    margin: 0 1.1rem;
    margin-bottom: 3rem;
    margin-top: 1.5rem;
    line-height: 2rem;
    
    @media screen and (min-width: 1024px) {
        text-align: ${({ align }) => align};
        margin-left: 0;
        width: ${({ width }) => width};
    }
`

export{StyledText}