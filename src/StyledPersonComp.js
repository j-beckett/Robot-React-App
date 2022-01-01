import React, { useState} from 'react';
import StyledImage from "./StyledImage";
import Paragraph from "./Paragraph";
import StyledPersonHeading from "./StyledPersonHeading";
import TestValueWrapper from "./TestValueWrapper";
import StyledAddTagInputBox from "./StyledAddTagInputBox";
import styled from 'styled-components';



const PersonComp = ({id, firstName, lastName, email, pic, company, city, skill, grades, className, arrLength}) => {

    const [buttonGroup, setButtonGroup] = useState(
        () => {
            let arr = Array(arrLength).fill(false);      //I filled the useState function in this way to handle if suddenly there were more/less students in JSON file
            return arr;                                   //at time of writing, 25 students
        }
    );

    const findAvg = () => {                   //Calculates the grade average and returns the result to the specific line in the component
        let total = 0;

        grades.forEach(num => {
            total =  total + parseFloat(num);
        })
        return (total / grades.length);
    }

    //monitors each of the + buttons for a click. If clicked, updates the whole array used in the state hook.
    //When updating state in React, we have to replace everything all at once.
    const handleButton = (e) => {
        e.preventDefault();
        let buttonId = e.target.id;
        let buttons = [...buttonGroup];
        buttons[buttonId] = !buttons[buttonId];
        setButtonGroup(buttons)
        console.log(buttonId);
    }

    return(
        <>
            <div className={className}>

                <StyledImage src={pic}/>

                <StyledPersonHeading firstName ={firstName} lastName={lastName} id={id} handleButton={handleButton} buttonGroup={buttonGroup}/>
                <Paragraph key={id}>

                    <br/>
                    City: {city} <br/>
                    Email: {email} <br/>
                    Company: {company}<br/>
                    Skill: {skill} <br/>
                    Average: {findAvg()}%
                    <br/><br/>
                </Paragraph>
                <br/>

                <TestValueWrapper isExpanded={buttonGroup[id]} grades={grades}/>
                <StyledAddTagInputBox id={id}/>
            </div>
        </>
    );

} // end person Component

const StyledPersonComp = styled(PersonComp)`

      border-top: #e1d7d7 solid 2px;

    `;

export default StyledPersonComp