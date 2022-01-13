import React , {useState, useEffect} from "react";


const useStudentVisibility = (arrayOfStudents, setVisibleStudents, nameTextboxData, tagTextboxData) => {

    useEffect(()=> { //watches for changes in the name box. Done this way because state is 'async' and this ensures everything stays synced!


        
        //since state must replace the entire array, build a new one and adjust if that particular student needs to be 'shown'
        let studentGroup = [...arrayOfStudents];
        arrayOfStudents.forEach((student, index) => {
            console.log(student.tagListy);
            //lower the names to lowercase to ensure the check works properly
            if ((student.firstName.toLowerCase()).includes(nameTextboxData) || (student.lastName.toLowerCase()).includes(nameTextboxData)){
                console.log(nameTextboxData);
                //console.log(typeof student.firstName.toLowerCase().includes(nameTextboxData));
                // console.log((student.firstName).toLowerCase() + ' ' + (student.lastName).toLowerCase());
                studentGroup[index] = true;
            }
            else
                studentGroup[index] = false;
            //console.log(student.firstName);

        });
         console.log(studentGroup);
        setVisibleStudents(studentGroup);


    },[nameTextboxData, tagTextboxData]);

}

export default useStudentVisibility;