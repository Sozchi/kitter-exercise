import React from "react";
import meows from "../meows.json";

const Username = ( { name } ) => <div className="Username">@{meows[0].user.username}</div>
    

    

export default Username;


// ## 1. Within the Username component, change the hardcoded value and use a variable for the 
// username instead.You can use the Meows data to get the value( remember, if you wanted the first
// user's username, it would be meows[0].user.username)
