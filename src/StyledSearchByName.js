import React , {useState} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";

//iterate through each of the students, and checks if the name is within the search paramaters. If it is, display that student.
// if the search box is empty, show all students.
const SearchByName = ({className, setVisibleStudents, arrayOfStudents, setNameTextboxData, visibleStudents}) => {

   // const [textboxData, setTextboxData] = useState("");  //default state for textbox is empty.

    let arr = new Array(25).fill(false);
   // arr[25] = true;
    //arr[2] = true;
   arr[0] = true;

    const handleOnChange = (e) => { //this is listening for any change in the text box
        let userInput= e.target.value;

        setNameTextboxData(userInput.toLowerCase())
        //console.log(setNameTextboxData)

        setVisibleStudents(arr);
        //setVisibleStudents = boxGroup;
        // arrayOfStudents.forEach((student) => {
        //
        //    //console.log(student.firstName);
        //     //console.log(student.lastName);
        // });
    }

  //  const element = document.getElementsByTagName("h2");

   // console.log(element);

    return (

        <input type = 'text' placeholder="Search by name" className={className} onChange={handleOnChange} />
    );
}

const StyledSearchByName = styled(SearchByName) `
  ${SearchBoxStyles}
`;

export default StyledSearchByName;