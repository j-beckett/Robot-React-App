import React , {useState, useEffect} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";

//iterate through each of the students, and checks if the name is within the search paramaters. If it is, display that student.
// if the search box is empty, show all students.
const SearchByName = ({className, setVisibleStudents, arrayOfStudents,visibleStudents}) => {

   // const [textboxData, setTextboxData] = useState("");  //default state for textbox is empty.

    const [nameTextboxData, setNameTextboxData] = useState("");

    let arr = new Array(25).fill(false);
   // arr[25] = true;
    //arr[2] = true;
   arr[0] = true;




    const handleOnChange = (e) => { //this is listening for any change in the text box
        let userInput= e.target.value;
        console.log(e.target.value);
        setNameTextboxData(userInput.toLowerCase())
        //4console.log(nameTextboxData);
        setVisibleStudents(arr);




        //setVisibleStudents = boxGroup;
        // arrayOfStudents.forEach((student) => {
        //
        //    //console.log(student.firstName);
        //     //console.log(student.lastName);
        // });
    }

    useEffect(()=> {
        console.log(nameTextboxData);
        if (nameTextboxData == ''){
            let arrz = new Array(25).fill(true);
            setVisibleStudents(arrz);
        }

    },[nameTextboxData]);

  //  const element = document.getElementsByTagName("h2");

   // console.log(element);

    return (

        <input type = 'text' placeholder="Search by name" className={className} onChange={handleOnChange} value={nameTextboxData} />
    );
}

const StyledSearchByName = styled(SearchByName) `
  ${SearchBoxStyles}
`;

export default StyledSearchByName;