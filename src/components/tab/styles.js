import styled from "styled-components";

const StyledTab = styled.button`
    border: none;
    padding: .5rem 1rem;
    font-size: 1rem;
    background-color: #1F2937;
    color: #9CA3AF;
    border-radius: 20px;
    position: relative;
    cursor: pointer;
        &::after{
            content: '';
            position: absolute;
            width: calc(100% + 4px);
            height: calc(100% + 2px);
            background-color: #9CA3AF;
            border-radius: 20px;
            top: -1px;
            z-index: -1;
            left: -2px;
            background: linear-gradient(90deg, #5e6675 0% , #242f42  15% 85%, #5e6675 100%);
        }
`


export {StyledTab}