import React , {useState, useEffect} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";
import Tester from "./Tester";
import handleOnChanges from "./handleOnChanges";
import useStudentVisibility from "./useStudentVisibility";
//iterate through each of the students, and checks if the name is within the search paramaters. If it is, display that student.
// if the search box is empty, show all students.
const SearchByName = ({className, nameTextboxData, setNameTextboxData, arrayOfStudents, setVisibleStudents, tagTextboxData}) => {


    console.log(nameTextboxData);

    const handleOnChange = (e) => { //this is listening for any change in the text box. set the state of whatever is in text box
        //Tester();
        let userInput= e.target.value;
        setNameTextboxData(userInput.toLowerCase()); //lower case to ensure that the 'includes' works properly !

        handleOnChanges(e);
    }

    //custom hook so I can have the same functionaility in both 'search' boxes. This helps me adhere to the DRY principle
    useStudentVisibility(arrayOfStudents, setVisibleStudents, nameTextboxData, tagTextboxData);

    // useEffect(()=> { //watches for changes in the name box. Done this way because state is 'async' and this ensures everything stays synced!
    //     //console.log(nameTextboxData);
    //     // if (nameTextboxData == '') {
    //     //     console.log('in if');
    //     //     setVisibleStudents(Array(arrayOfStudents.length).fill(true));
    //     //     return;
    //     // }
    //     //since state must replace the entire array, build a new one and adjust if that particular student needs to be 'shown'
    //     let studentGroup = [...arrayOfStudents];
    //     arrayOfStudents.forEach((student, index) => {
    //         console.log(student.tagListy);
    //         //lower the names to lowercase to ensure the check works properly
    //         if ((student.firstName.toLowerCase()).includes(nameTextboxData) || (student.lastName.toLowerCase()).includes(nameTextboxData)){
    //             console.log(nameTextboxData);
    //             //console.log(typeof student.firstName.toLowerCase().includes(nameTextboxData));
    //            // console.log((student.firstName).toLowerCase() + ' ' + (student.lastName).toLowerCase());
    //             studentGroup[index] = true;
    //         }
    //         else
    //             studentGroup[index] = false;
    //         //console.log(student.firstName);
    //
    //     });
    //   //  console.log(studentGroup);
    //     setVisibleStudents(studentGroup);
    //
    //
    // },[nameTextboxData]);

    return (

        <input type = 'text' placeholder="Search by name" value={nameTextboxData} className={className} onChange={handleOnChange}  />
    );
}

const StyledSearchByName = styled(SearchByName) `
  ${SearchBoxStyles}
`;

export default StyledSearchByName;