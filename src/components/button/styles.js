import styled from "styled-components";

const StyledButton = styled.button`
    background: linear-gradient(180deg, #689FFF 18.75%, #367BF3 69.27%);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.46);
    border-radius: 4px;
    padding: .8rem 1.5rem;
    border: none;
    color: white ;
    font-size: 1rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    width:${({ width }) => width};
    justify-content: center;
    margin: auto;

    @media screen and (min-width: 1024px) {
        margin: ${({ align }) => align};
        padding: .7rem 1.5rem;
        width: auto;
    }


`

const StyledImg = styled.img`
    width: 20px;
`

export {StyledButton, StyledImg}