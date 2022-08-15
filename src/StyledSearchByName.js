import React , {useState, useEffect} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";
import Tester from "./Tester";
import handleOnChanges from "./handleOnChanges";
//iterate through each of the students, and checks if the name is within the search paramaters. If it is, display that student.
// if the search box is empty, show all students.
const SearchByName = ({className, nameTextboxData, setNameTextboxData}) => {


    console.log(nameTextboxData);

    const handleOnChange = (e) => { //this is listening for any change in the text box. set the state of whatever is in text box
        //Tester();
        let userInput= e.target.value;
        setNameTextboxData(userInput.toLowerCase()); //lower case to ensure that the 'includes' works properly !

        handleOnChanges(e);
    }

    return (

        <input type = 'text' placeholder="Search by name" value={nameTextboxData} className={className} onChange={handleOnChange}  />
    );
}

const StyledSearchByName = styled(SearchByName) `
  ${SearchBoxStyles}
`;

export default StyledSearchByName;