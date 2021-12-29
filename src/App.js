import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StyledSearchByName from "./StyledSearchByName";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledPersonComp from "./StyledPersonComp";
import SearchboxWrapper from "./SearchboxWrapper";



const App = ({className}) => {
  const [data, setData] = useState([]);
  const [visibleStudents, setVisibleStudents] = useState([]);

  //IIFE syntax to ensure it runs first
  useEffect( () => {
    (async () => {
      try {
        const { data } = await axios.get('https://api.hatchways.io/assessment/students');
        setData(data.students);
        console.log(data); //extract the data out of the API response
        //console.log(data.length); // not needed - for debugging
        setVisibleStudents(new Array(25).fill(true)); //set the state hook for visible students - relates to the search boxes

      } catch (error) {
        console.log('API Error: ' + error);
      }
    })();

  },[]);


  //pass in the arrayOfStudents to Person Component.
  //Because of this, I can use Person Component object destructuring and make each of the key / value pairs readable without the . syntax
  return (
      <div className={className}>
        <SearchboxWrapper arrayOfStudents={data} setVisibleStudents={setVisibleStudents} arrLength = {data.length} visibleStudents={visibleStudents}/>
        {data.map( (student, index) => {
          if (visibleStudents[index]) { //if the particular student is set to true in the state hook, render it ! Must work both with name and tag search
          return (<StyledPersonComp key = {student.id} {...student} arrLength = {data.length}/>)
        }}

        )}
      </div>


  );
}//end App Comp

export default App;
