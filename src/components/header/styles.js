import styled from "styled-components";



const StyledHeader = styled.header`
    background-image: url('./public/images/hero-illustration.svg');
    background-repeat: no-repeat;
    background-position: top, left;
    background-size: 600%;


`;


const StyledNav = styled.nav`
    margin-bottom:6rem;

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
    font-weight: 600;


`

const StyledLogo = styled.img`



`

const StyledH1 = styled.h1`
    font-family: 'Uncut Sans Semibold', sans-serif;
    font-weight: 600;
    font-size: 64px;
    text-align: center;
    margin-bottom: 1rem;
    line-height: 97%;

`

const StyledSpan = styled.span`
    font-family: 'Uncut Sans Semibold Italic', sans-serif;
`

const StyledP = styled.p`
    color: #9CA3AF;
    font-size: 1.2rem;
    text-align: center;
    margin: 0 1rem;
    margin-bottom: 3rem;
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

`

const StyledSection = styled.section`
    background: linear-gradient(180deg, #111827 0%, #192130 100%);
    padding-bottom: 4rem;
`

export{StyledHeader, StyledNav, StyledLi, StyledUl, StyledA, StyledLogo, StyledDiv, StyledH1, StyledSpan, StyledP, StyledButton, StyledSection}

