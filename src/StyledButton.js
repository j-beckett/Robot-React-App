import React from "react";
import styled from 'styled-components';

const Button = ({id, className,onClick, isExpanded}) => {

    if (isExpanded)
        return (
            <button id = {id} onClick={onClick} className={className}>-</button>
        );

    else
        return (
            <button id = {id} onClick={onClick} className={className}>+</button>
        );
}

const StyledButton = styled(Button) `
      margin: 0% 1% 0% 0%;
      float: right;
      font-size: 5em;
      background-color: transparent;
      border: none;
      color: grey;
    `;

export default StyledButton;