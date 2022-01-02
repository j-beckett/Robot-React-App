import React from "react";
import Paragraph from "./Paragraph";

//Renders each single test value item. FIXME:  If data is not a number, changes the grade value to 'unknown'
const TestValue = ({index, grade}) => {

    return (
        <p>Test {index}: {grade}  </p>
    );
}

export default TestValue;