import styled from "styled-components";

const StyledPricesSection = styled.section`
    padding: 1rem .5rem;
`


const StyledPrice = styled.div`
    margin: 0 3rem;
    padding: 1.7rem;
    background-color: ${({ background }) => background};
    position: relative;
    margin-bottom: 2rem;

`

const StyledPopUp = styled.div `
    display: ${({ display }) => display};
    position: absolute;
    background-color: #A7F3D0;
    color: #10B981;
    top: -1rem;
    padding: .5rem;
    border-radius: 20px;
    align-items: center;
    font-size: .9rem;
    gap: 0.5rem;
    font-weight: 600;
    right: 1.5rem;

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


export {StyledPricesSection, StyledPrice, StyledTitle, StyledRealPrice, StyledNumber, StyledPerX, StyledDescription, StyledInclude, StyledPopUp}