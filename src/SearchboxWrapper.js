import React , {useState} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledSearchByName from "./StyledSearchByName";


const SearchboxWrapper = ({setVisibleStudents, arrayOfStudents, arrLength, visibleStudents}) => {

    const [nameTextboxData, setNameTextboxData] = useState("");
    const [tagTextboxData, setTagTextboxData] = useState("");

    console.log(visibleStudents);

    if (nameTextboxData === "" && tagTextboxData === ""){
        console.log("i'm true");
       // setVisibleStudents(Array(arrLength).fill(true));
    }

    let arr = new Array(arrLength).fill(false);
    arr[0] = true;
    //console.log(arr);
    if (nameTextboxData === "1" && tagTextboxData === ""){
        console.log("one");
        //setVisibleStudents(arr);
    }

    return (
        <>
    <StyledSearchByName setVisibleStudents={setVisibleStudents} arrayOfStudents={arrayOfStudents} setNameTextboxData={setNameTextboxData} visibleStudents={visibleStudents}/>
    <StyledSearchByTag/>
        </>
    );
}

export default SearchboxWrapper;