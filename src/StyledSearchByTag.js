import React from "react";
import styled from 'styled-components';
import StyledSearchByName from "./StyledSearchByName";
import SearchBoxStyles from "./SearchBoxStyles";
import handleOnChanges from "./handleOnChanges";
import useStudentVisibility from "./useStudentVisibility";
const SearchByTag = ({className , tagTextboxData, setTagTextboxData, arrayOfStudents, setVisibleStudents, nameTextboxData}) => {


    const handleOnChange = (e) => { //this is listening for any change in the text box. set the state of whatever is in text box
        //Tester();
        let userInput= e.target.value;
        setTagTextboxData(userInput.toLowerCase()); //lower case to ensure that the 'includes' works properly !

        handleOnChanges(e);
    }

    useStudentVisibility(arrayOfStudents, setVisibleStudents, nameTextboxData, tagTextboxData);
    return (

        <input type = 'text' placeholder="Search by TAG" value={tagTextboxData} className={className} onChange={handleOnChange}/>
    );
}

//if everything works right I can recycle the styles created for search by tag in this way
const StyledSearchByTag = styled(SearchByTag)`
    ${SearchBoxStyles}
`;

export default StyledSearchByTag;