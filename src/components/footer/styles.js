import styled from "styled-components";

const StyledAdvertisment = styled.div`
    background: linear-gradient(45deg, #367BF3 0, #984ccf 100%);
    padding: 1rem 2rem;
    padding-bottom: 3rem;
    margin: 0 1rem;
    border-radius: 6px;
    margin-bottom: 2rem;

`

const StyledText = styled.p`
    margin: 1.5rem 0;
    text-align: center;
    line-height: 1.5;
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

export{StyledAdvertisment, StyledText, StyledLi, StyledA, StyledNav, StyledDiv}