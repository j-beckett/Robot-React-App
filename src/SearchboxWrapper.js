import React , {useState, useEffect} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledSearchByName from "./StyledSearchByName";
import Tester from "./Tester";
import useStudentVisibility from "./useStudentVisibility";

const SearchboxWrapper = ({setVisibleStudents, arrayOfStudents, arrLength, visibleStudents}) => {


    const [tagTextboxData, setTagTextboxData] = useState("");


    const [nameTextboxData, setNameTextboxData] = useState("");

    //custom hook so I can have the same functionaility in both 'search' boxes. This helps me adhere to the DRY principle
    useStudentVisibility(arrayOfStudents, setVisibleStudents, nameTextboxData, tagTextboxData);

    return (
        <>
    <StyledSearchByName  nameTextboxData={nameTextboxData}  setNameTextboxData={setNameTextboxData} />
    <StyledSearchByTag tagTextboxData={tagTextboxData} setTagTextboxData={setTagTextboxData} />
        </>
    );
}

export default SearchboxWrapper;