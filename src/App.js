import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StyledSearchByName from "./StyledSearchByName";
import StyledSearchByTag from "./StyledSearchByTag";
import StyledPersonComp from "./StyledPersonComp";
import SearchboxWrapper from "./SearchboxWrapper";



const App = ({className}) => {
  const [data, setData] = useState([]);
  const [visibleStudents, setVisibleStudents] = useState([]);


    //tagList state hook is very simple... It only holds the 'latest' tag added
    //this allows me to update all the componenets after the user has added a new tag.
    //to keep track of ALL tags, I added an array to the data recieved from the API
  const [tagList, setTagList] = useState([]);

//console.log(tagList);

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
          return (<StyledPersonComp key = {student.id} {...student} arrLength = {data.length} setTagList={setTagList}/>)
        }}

        )}
      </div>


  );
}//end App Comp

export default App;
