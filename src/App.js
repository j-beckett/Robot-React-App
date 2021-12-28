import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StyledSearchByName from "./StyledSearchByName";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledPersonComp from "./StyledPersonComp";



const App = ({className}) => {
  const [data, setData] = useState([]);

  //IIFE syntax to ensure it runs first
  useEffect( () => {
    (async () => {
      try {
        const { data } = await axios.get('https://api.hatchways.io/assessment/students');
        setData(data);
        console.log(data);
        console.log(data.length); // not needed - for debugging

      } catch (error) {
        console.log('API Error: ' + error);
      }
    })();

  },[]);

  let allStudent = data.students;   //extract the student data into an array. Add a visable KVP that works with our search bars.
  let arrayOfStudents = [];

  console.log(arrayOfStudents);
  console.log(allStudent);
  for (var key in allStudent){
    Object.assign(allStudent[key], {"visable" :true});
    arrayOfStudents.push(allStudent[key]);
    //arrayOfStudents.push(true)

  }

  const [visibleStudents, setVisibleStudents] = useState([]);           //use this state hook to adjust the visable students via search boxes


  if (arrayOfStudents.length === 0) {
    console.log("we got no length");
  } else {
    for (const element of arrayOfStudents) {
      visibleStudents.push(true);
    }                                  //at time of writing, 25 students
  }
  console.log(visibleStudents);



//arrayOfStudents[0].visable = false;

  //pass in the arrayOfStudents to Person Component.
  //Because of this, I can use Person Component object destructuring and make each of the key / value pairs readable without the . syntax
  return (
      <div className={className}>
        <StyledSearchByName setVisibleStudents={setVisibleStudents}/>
        <StyledSearchByTag/>
        {arrayOfStudents.map( (student) => {
          if (visibleStudents[student.id]) { //if the particular student is set to true in the state hook, render it ! Must work both with name and tag search
          return (<StyledPersonComp key = {student.id} {...student} arrLength = {arrayOfStudents.length}/>)
        }}

        )}
      </div>


  );
}//end App Comp

export default App;
