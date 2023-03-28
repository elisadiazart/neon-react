import { REVIEWS } from "../../constants/reviewsInfo"
import Title from "../titles/Titles"
import { StyledReviewsSection, StyledReview, StyledReviewContainer, StyledImage, StyledReviewText, StyledAuthorContainer, StyledCompany } from "./styles"

const SectionReviews = () => {
    return <StyledReviewsSection>
        <Title text='Sound too good ? Hear what our customers have to say'/>
        <StyledReviewContainer>
            {REVIEWS.map(review => (
                <StyledReview key ={review.key}>
                    <StyledImage src={review.image} alt={review.name} />
                    <StyledReviewText>{review.text}</StyledReviewText>
                    <StyledAuthorContainer>
                        <p>{review.name}</p>
                        <div> - </div>
                        <StyledCompany href="#">{review.company}</StyledCompany>
                    </StyledAuthorContainer>
                </StyledReview>
            ))}
        </StyledReviewContainer>
        
    </StyledReviewsSection>
}

export default SectionReviews