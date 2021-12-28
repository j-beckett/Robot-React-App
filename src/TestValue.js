import React from "react";
import Paragraph from "./Paragraph";

//Renders each single test value item. FIXME:  If data is not a number, changes the grade value to 'unknown'
const TestValue = ({index, grade}) => {

    return (
        <Paragraph>Test {index}: {grade}  </Paragraph>
    );
}

export default TestValue;