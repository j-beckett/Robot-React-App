import React , {useState, useEffect} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledSearchByName from "./StyledSearchByName";
import Tester from "./Tester";


const SearchboxWrapper = ({setVisibleStudents, arrayOfStudents, arrLength, visibleStudents}) => {


    const [tagTextboxData, setTagTextboxData] = useState("");


    const [nameTextboxData, setNameTextboxData] = useState("");

    //let arr = new Array(25).fill(false);
    // arr[25] = true;
    //arr[2] = true;
    //arr[0] = true;

    //let arr = new Array(arrLength).fill(false);
    //arr[0] = true;

    // const handleOnChange = (e) => { //this is listening for any change in the text box
    //     let userInput= e.target.value;
    //     console.log(e.target.value);
    //     setNameTextboxData(userInput.toLowerCase())
    //     //4console.log(nameTextboxData);
    //     //setVisibleStudents(arr);
    //
    //     let studentGroup = [...visibleStudents];
    //     console.log(studentGroup);
    //     arrayOfStudents.forEach((student, index) => {
    //         //console.log((student.firstName).toLowerCase());
    //         //console.log('ingaberg orton'.includes('ro'));
    //         if ((student.firstName.toLowerCase()).includes(nameTextboxData) || (student.lastName.toLowerCase()).includes(nameTextboxData)){
    //             console.log(nameTextboxData);
    //             //console.log(typeof student.firstName.toLowerCase().includes(nameTextboxData));
    //             console.log((student.firstName).toLowerCase() + ' ' + (student.lastName).toLowerCase());
    //             studentGroup[index] = true;
    //         }
    //         else
    //             studentGroup[index] = false;
    //        //console.log(student.firstName);
    //
    //     });
    //     console.log(studentGroup);
    //     setVisibleStudents(studentGroup);
    // }
    //
    // useEffect(()=> {
    //     console.log(nameTextboxData);
    //     if (nameTextboxData == ''){
    //         let arrz = new Array(25).fill(true);
    //         setVisibleStudents(arrz);
    //     }
    //
    // },[nameTextboxData]);



   // console.log(visibleStudents);
   //  i
   //  if (nameTextboxData === "" && tagTextboxData === ""){
   //      console.log("i'm true");
   //     // setVisibleStudents(Array(arrLength).fill(true));
   //  }


    //console.log(arr);
    // if (nameTextboxData === "1" && tagTextboxData === ""){
    //     console.log("one");
    //     //setVisibleStudents(arr);
    // }

    return (
        <>
    <StyledSearchByName  nameTextboxData={nameTextboxData}  setNameTextboxData={setNameTextboxData} arrayOfStudents={arrayOfStudents} setVisibleStudents={setVisibleStudents} />
    <StyledSearchByTag/>
        </>
    );
}

export default SearchboxWrapper;