import React from "react";
import StyledHeadingTwo from "./StyledHeadingTwo";
import StyledButton from "./StyledButton";
import styled from 'styled-components';


const PersonHeading = ({firstName, lastName, id, handleButton, buttonGroup, className}) => (

    <div className={className}>
        <StyledHeadingTwo> {firstName} {lastName} </StyledHeadingTwo> <StyledButton id = {id} onClick={handleButton} isExpanded={buttonGroup[id]}/>
    </div>
)


const StyledPersonHeading = styled(PersonHeading) `

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default StyledPersonHeading;