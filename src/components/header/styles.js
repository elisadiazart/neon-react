import styled from "styled-components";



const StyledHeader = styled.header`
    background-image: url('/images/hero-illustration.svg');
    background-repeat: no-repeat;
    height: auto;
    background-position: center;
    background-size: cover;
    @media screen and (min-width: 1024px) {
        background-position: -100px 00px;
        background-size: 110%;
    }
    
`;


const StyledNav = styled.nav`
    margin-bottom:6rem;

    @media screen and (min-width: 1024px) {
        padding: 0 22rem;
    }

`

const StyledLi = styled.li`



`

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 0 1.5rem;

`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

`

const StyledA = styled.a`
    color: grey;
    font-weight: 400;


`

const StyledLogo = styled.img`



`

const StyledH1 = styled.h1`
    font-family: 'Uncut Sans Semibold', sans-serif;
    font-weight: 600;
    font-size: 60px;
    text-align: center;
    line-height: 97%;
    margin: 0 1rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 1024px) {
        text-align: left;
        font-size: 75px;
        margin-left: 0
    }

`

const StyledSpan = styled.span`
    font-family: 'Uncut Sans Semibold Italic', sans-serif;
`



const StyledButton = styled.button`
    background: linear-gradient(180deg, rgba(253, 253, 253, 0.11) 18.75%, rgba(255, 255, 255, 0.04) 69.27%);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: .8rem 1.5rem;
    border: none;
    color: gray ;
    font-size: 1rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    width: 300px;
    justify-content: center;
    margin: auto;
    margin-top: 1rem;

    @media screen and (min-width: 1024px) {
        margin: 0;
        padding: .8rem 1.5rem;
        width: auto;
        color: white;
    }

`

const StyledSection = styled.section`
    background: linear-gradient(180deg, transparent 0%, #192130 100%);
    padding-bottom: 4rem;
    @media screen and (min-width: 1024px) {
        padding: 0 22rem;
    }
    
    
`

const StyledContainer = styled.div`
    @media screen and (min-width: 1024px) {
        width: 800px;
        padding-bottom: 6rem;
    }
`

const StyledButtonsContainer = styled.div`
    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
`

export{StyledHeader, StyledNav, StyledLi, StyledUl, StyledA, StyledLogo, StyledDiv, StyledH1, StyledSpan, StyledButton, StyledSection, StyledContainer, StyledButtonsContainer}

