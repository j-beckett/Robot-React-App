import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StyledSearchByName from "./StyledSearchByName";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledPersonComp from "./StyledPersonComp";
import SearchboxWrapper from "./SearchboxWrapper";



const App = ({className}) => {
  const [data, setData] = useState([]);
  const [visibleStudents, setVisibleStudents] = useState([]);
 // let testy;


//i think instead of an array an arrays I should use an array of objects
    //the object then can contain the string of the user entered tag PLUS the index of where the student is in the array of students
    //push the search handler update to git then start to mess around with that :)
  const [tagList, setTagList] = useState([]);
  //   const [tagList, setTagList] = useState(
  //     () => {
  //       let arr = Array(25)   ; //ugly; this needs to be in the IIFE. however I haven't figured out a way to init with the correct number of students inside the IIFE without breaking everything.
  //       for (let i=0; i< arr.length; i++){
  //         arr[i] = new Array();
  //       }
  //       return arr; //at time of writing, 25 students
  //     }
  // );

console.log(tagList);

  //IIFE syntax to ensure it runs first
  useEffect( () => {
    (async () => {
      try {
        const { data } = await axios.get('https://api.hatchways.io/assessment/students');

        data.students.forEach( student =>  {
            student.tagListy = [];
          });
        setData(data.students);
        console.log(data); //extract the data out of the API response
        //console.log(data.length); // not needed - for debugging
        setVisibleStudents(new Array(data.students.length).fill(true)); //set the state hook for visible students - relates to the search boxes



      } catch (error) {
        console.log('API Error: ' + error);
      }
    })();

  },[]);


  //console.log(data);


  //pass in the arrayOfStudents to Person Component.
  //Because of this, I can use Person Component object destructuring and make each of the key / value pairs readable without the . syntax
  return (
      <div className={className}>

        <SearchboxWrapper arrayOfStudents={data} setVisibleStudents={setVisibleStudents} arrLength = {data.length} />
        {data.map( (student, index) => {
          if (visibleStudents[index]) { //if the particular student is set to true in the state hook, render it ! Must work both with name and tag search
          return (<StyledPersonComp key = {student.id} {...student} arrLength = {data.length} tagList={tagList} setTagList={setTagList} fullList={tagList}/>)
        }}

        )}
      </div>


  );
}//end App Comp

export default App;
