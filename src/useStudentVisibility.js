import React , {useState, useEffect} from "react";


const useStudentVisibility = (arrayOfStudents, setVisibleStudents, nameTextboxData, tagTextboxData) => {

    useEffect(()=> { //watches for changes in the name box. Done this way because state is 'async' and this ensures everything stays synced!

        //since state must replace the entire array, build a new one and adjust if that particular student needs to be 'shown'
        let studentGroup = [...arrayOfStudents];

        arrayOfStudents.forEach((student, index) => {
            //console.log(student.tagListy);
            //lower the names to lowercase to ensure the check works properly

            if (nameTextboxData === "" && tagTextboxData != "" ){
                studentGroup[index] = false;
                if (student.tagListy.length) {
                    console.log(student.tagListy.includes(tagTextboxData));
                    console.log('array not empty');
                    student.tagListy.forEach(tag => {
                        if (tag.includes(tagTextboxData)) {
                            console.log('found!!!!');
                            studentGroup[index] = true;
                        }
                    })

                }

                setVisibleStudents(studentGroup);
                return;
            }


            else if ( tagTextboxData=== "" && nameTextboxData != "" ){
                console.log('has name');

                if ((student.firstName.toLowerCase()).includes(nameTextboxData) || (student.lastName.toLowerCase()).includes(nameTextboxData)){
                    //console.log(nameTextboxData);
                    //console.log(typeof student.firstName.toLowerCase().includes(nameTextboxData));
                    //console.log(typeof student.firstName.toLowerCase());
                   // console.log((student.firstName).toLowerCase() + ' ' + (student.lastName).toLowerCase());
                    studentGroup[index] = true;
                }
                else
                    studentGroup[index] = false;
                //console.log(student.firstName);
            }
            else if ( tagTextboxData != "" && nameTextboxData != "" ){

                console.log('has both');
            }
        });




         console.log(studentGroup);
        setVisibleStudents(studentGroup);


    },[nameTextboxData, tagTextboxData]);

}

export default useStudentVisibility;