import React , {useState, useEffect} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledSearchByName from "./StyledSearchByName";
import Tester from "./Tester";


const SearchboxWrapper = ({setVisibleStudents, arrayOfStudents, arrLength, visibleStudents}) => {


    const [tagTextboxData, setTagTextboxData] = useState("");


    const [nameTextboxData, setNameTextboxData] = useState("");

    return (
        <>
    <StyledSearchByName  nameTextboxData={nameTextboxData}  setNameTextboxData={setNameTextboxData} arrayOfStudents={arrayOfStudents} setVisibleStudents={setVisibleStudents} />
    <StyledSearchByTag/>
        </>
    );
}

export default SearchboxWrapper;