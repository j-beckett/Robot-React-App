import React , {useState, useEffect} from "react";


//use this event handler to compare both state hooks and then modify the 'visbible student arrays'

const handleOnChanges = (e) => { //this is listening for any change in the text box. set the state of whatever is in text box
    console.log("hey, i'm in the main event");
    console.log(e.target.value);

    //console.log(document.querySelectorAll("h3"));
}

export default handleOnChanges;