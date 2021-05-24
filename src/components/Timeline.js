import React from "react";
import Meow from "./Meow.js";
import meows from "../meows.json";

const Timeline = ({meow}) =>
{
    return (
        <div>
            {Meow.map( ( Meow ) =>( <Meow Meow={Meow} />))}
        </div>
   ) 
};

export default Timeline;



// ## 8. Create a Timeline component which takes in meows as
// a prop and puts them inside the Timeline.Add the CSS for the Timeline(in styles.css ) 
// so that it is a vertical flexbox with center aligned items.
