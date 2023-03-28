import styled from "styled-components";

const StyledReviewsSection = styled.section`
    padding: 2rem 1rem;
    background: linear-gradient(180deg, #192130 0% , transparent  7%);
    margin-bottom: 2rem;

`

const StyledReview = styled.div`
    background-color: #1F2937;
    padding: 1.5rem;

`

const StyledReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 3rem 2rem;
    position: relative;
    margin-bottom: 1rem;

    &::after{
        content: '';
        position: absolute;
        background: linear-gradient(180deg, transparent  0% , #192130  95%);
        width: 100%;
        height: 150px;
        bottom: 0;
    }

`

const StyledImage = styled.img`
    width: 50px;
    border-radius: 50%;
    margin-bottom: 1rem;
`

const StyledReviewText = styled.p`
    color: #9CA3AF;
    line-height: 1.5;
    margin-bottom: 1rem;
`

const StyledAuthorContainer = styled.div`
    display: flex;
    gap: .5rem;
    font-size: 0.85rem;
    font-weight: 300;
`

const StyledCompany = styled.a`
    color: #367BF3;
`


export {StyledReviewsSection, StyledReview, StyledReviewContainer, StyledImage, StyledReviewText, StyledAuthorContainer, StyledCompany}