import styled from "styled-components";

const StyledAdvertisment = styled.div`
    background: linear-gradient(45deg, #367BF3 0, #984ccf 100%);
    padding: 1rem 2rem;
    padding-bottom: 3rem;
    margin: 0 1rem;
    border-radius: 6px;
    margin-bottom: 2rem;
    @media screen and (min-width: 1024px) {
        width: 900px;
        margin: auto;
        display: flex;
        padding-top: 3rem
    }

`

const StyledText = styled.p`
    margin: 1.5rem 0;
    text-align: center;
    line-height: 1.5;
    @media screen and (min-width: 1024px) {
        text-align: left;
    }
`
const StyledLi = styled.li`
    color: white;
    font-size: .8rem;
    display: flex;
    flex-direction: column;
    gap: .7rem;
    margin-bottom: 2rem;
`

const StyledA = styled.a`
    font-size: .9rem;
    color: #9CA3AF;
    font-weight: 300;
`

const StyledNav = styled.nav`
    margin: 0 1rem;
    
`

const StyledDiv = styled.div`
    color: #9CA3AF;
    display: flex;
    gap: .2rem;
    font-weight: 300;
    font-size: .9rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
`

const StyledDivText = styled.div`
    @media screen and (min-width: 1024px) {
        width: 60%;
        padding-left: 3rem;
    }
`

const StyledUl = styled.ul`
    @media screen and (min-width: 1024px) {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
            padding: 4rem 0;
            margin: 0 30.5rem;
    }
`

const StyledLinkContainer = styled.div`
    @media screen and (min-width: 1024px) {
            display: flex;
            gap: 3rem;
    }
`

export{StyledAdvertisment, StyledText, StyledLi, StyledA, StyledNav, StyledDiv, StyledDivText, StyledUl, StyledLinkContainer}