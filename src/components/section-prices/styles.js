import styled from "styled-components";

const StyledPricesSection = styled.section`
    padding: 1rem .5rem;
`


const StyledPrice = styled.div`
    margin: 0 4rem;
    padding: 1.7rem;
    background-color: ${({ background }) => background};
    position: relative;

    &::after{
        content: ${({ content }) => content};
        width: 50px;
        height: 50px;
        background-color: red;
        position: absolute;
        top: -1rem;
    }
`

const StyledTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: .5rem;
`
const StyledRealPrice = styled.h3`
    color: #9CA3AF;
    font-weight: 400;
    font-size: 1.8rem;
    display: flex;
    align-items: baseline;
    margin-bottom: .8rem;
`

const StyledNumber = styled.span`
    font-size: 2.2rem;
    color: white;
    font-weight: 500;
    font-family: 'Uncut Sans Semibold', sans-serif;
`

const StyledPerX = styled.span`
    color: #9CA3AF;
    font-weight: 400;
    font-size: 1rem;
`

const StyledDescription = styled.p`
    color: #9CA3AF;
    font-weight: 300;
    font-size: .9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`

const StyledInclude = styled.h5`
    font-size: .9rem;
    font-weight: 300;
    margin-bottom: .5rem;
    margin: 1rem 0;
`

export {StyledPricesSection, StyledPrice, StyledTitle, StyledRealPrice, StyledNumber, StyledPerX, StyledDescription, StyledInclude}