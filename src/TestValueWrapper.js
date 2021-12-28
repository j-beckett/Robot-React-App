//IsExpanded is a boolean passed in from React.UseState. If isExpanded is True,
// the user has clicked on the + button,and the card should expand.
import React from "react";
import TestValue from "./TestValue";

const TestValueWrapper = ({grades, isExpanded}) => {
    if (isExpanded){

        return(
            <>
                {grades.map((grade, index) =>
                    <TestValue index={index+1} grade={grade}/>
                )}
                <br/>
            </>
        );
    }

    else
        return null;
}

export default TestValueWrapper;