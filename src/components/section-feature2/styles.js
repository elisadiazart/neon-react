import styled from "styled-components";

const StyledSection = styled.section`
    background: linear-gradient(180deg, #192130 0%, transparent  100%);
    padding: 1rem 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(156, 163, 175, 0.11);
    @media screen and (min-width: 1024px) {
        padding: 4rem 22rem;
    }
`

const StyledImg = styled.img`
    width: 100%;
    @media screen and (min-width: 1024px) {
        width: 550px;
    }
`

const StyledCheckContainer = styled.div`
    margin: 0 6rem;
    @media screen and (min-width: 1024px) {
        margin: 0;
    }
`

const StyledDiv = styled.div`
    @media screen and (min-width: 1024px) {
        width: 750px;
        margin: auto;
    }
`
const StyledContainer = styled.div`
    @media screen and (min-width: 1024px) {
        display: flex;
        margin: auto;
        flex-direction: row-reverse;
    }
`

const StyledTextContainer = styled.div`
    @media screen and (min-width: 1024px) {
    text-align: left;
    }
`


export{StyledSection, StyledImg, StyledCheckContainer, StyledDiv, StyledContainer, StyledTextContainer}