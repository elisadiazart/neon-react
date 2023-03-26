import styled from "styled-components";


const StyledTransparentButtonContainer = styled.div`
    display: flex;
    margin: auto;
    margin-bottom: 2rem;

`

const StyledTransparentButton = styled.div`
    display: inline;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 40px;
    padding: 8px 17px;
    text-align: center;
    margin: auto;
    font-size: .8rem;
`

const StyledTransparentButtonA = styled.a`
    color: rgba(54, 123, 243, 1);
    margin-left: .5rem;
    padding-right: 20px;
    display: inline;
    position: relative;

`

const StyledArrow = styled.img`
    width: 20px;
    position: absolute

`




export {StyledTransparentButton, StyledTransparentButtonA, StyledArrow, StyledTransparentButtonContainer}