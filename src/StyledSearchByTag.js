import React from "react";
import styled from 'styled-components';
import StyledSearchByName from "./StyledSearchByName";
import SearchBoxStyles from "./SearchBoxStyles";
import handleOnChanges from "./handleOnChanges";
const SearchByTag = ({className}) => {

    return (

        <input type = 'text' placeholder="Search by TAG" className={className} onChange={handleOnChanges}/>
    );
}

//if everything works right I can recycle the styles created for search by tag in this way
const StyledSearchByTag = styled(SearchByTag)`
    ${SearchBoxStyles}
`;

export default StyledSearchByTag;