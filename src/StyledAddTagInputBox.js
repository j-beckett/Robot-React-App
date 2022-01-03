import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


//this comp does most of the actual 'work' behind adding a tag
const AddTagInputBox = ({className, tagList, setTagList}) => {
    const [input, setInput] = useState("");

    //manages keystrokes for the controlled input components.
    const handleChange = e => {
        e.preventDefault();
        console.log(e.target.value);
        setInput(e.target.value);

    }


    //listening for enter keystrokes. Allows tags to be submitted without the use of a button.
    useEffect(() => {
        const listener = event => {
            if ((event.code === "Enter" || event.code === "NumpadEnter") ){
                console.log("Enter key was pressed. Run your function.");
                onFormSubmit();
                event.preventDefault();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);  //remove listener when component is destroyed
        };
    }, []);


    const AddElem = (newTag) => {
        let newList = [...tagList];
        newList.push(newTag);
        setTagList(newList);

    };

    //submits the tag entry from the last 'active' box.
    // This allows a user to begin typing in a different text box, then switch input boxes to current and only submit the active box.
    const onFormSubmit = e => {
        e.preventDefault();
        if (e.target[0].value === "")  //don't allow submission of blank tags
            return;
        console.log(e.target[0].value);
        AddElem(e.target[0].value);  //adds the new tag to an array of SPAN's
        setInput("");
        console.log(e.target[0].value);
    }


    //state holding the list of SPAN elements, which is the user added TAG's.




    return (
        <>

            <form onSubmit={onFormSubmit} >
                <input type='text'   placeholder='Add a tag...' className={className} onChange={handleChange} value={input}></input>
            </form>
        </>
    );
}





const StyledAddTagInputBox = styled(AddTagInputBox)`
    border: none;
  outline: none;
   // margin-left: 5%;
    height: 50px;
    font-size: 1.5em;
`;

export default StyledAddTagInputBox;