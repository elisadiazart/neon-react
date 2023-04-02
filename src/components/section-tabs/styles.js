import styled from "styled-components";

const StyledTabsSection = styled.section`
    margin: 0 2rem;
    margin-bottom: 4rem;
`

const StyledTabsContainer = styled.div`
    margin: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`

const StyledResources = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
    }
`

const StyledSection = styled.div`
    background-color: #1F2937;
    padding: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    @media screen and (min-width: 1024px) {
        width: 200px;
    }
`

export {StyledTabsSection, StyledTabsContainer, StyledResources, StyledSection}