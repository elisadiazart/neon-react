import styled from "styled-components";

const StyledTitle = styled.h2`
    font-family: 'Uncut Sans Semibold';
    font-size: 2.25rem;
    text-align: center;
    margin-top: 2rem;
    @media screen and (min-width: 1024px) {
        font-size: 2.7rem;
        text-align: ${({ align }) => align};
        width: 600px;
        margin: auto;
    }

`

export {StyledTitle}