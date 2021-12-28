import React , {useState} from "react";
import styled from 'styled-components';
import SearchBoxStyles from "./SearchBoxStyles";


const SearchByName = ({className, setVisibleStudents}) => {

    const [textboxData, setTextboxData] = useState("");  //default state for textbox is empty.

    const handleOnChange = (e) => { //this is listening for any change in the text box
        let userInput= e.target.value;
        console.log(userInput)
        setTextboxData(userInput)
    }

    return (

        <input type = 'text' placeholder="Search by name" className={className} onChange={handleOnChange} />
    );
}

const StyledSearchByName = styled(SearchByName) `
  ${SearchBoxStyles}
`;

export default StyledSearchByName;