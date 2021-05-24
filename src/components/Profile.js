import React from "react";
import meows from "../meows.json";
import Avatar from "./Avatar";

const Profile = ({displayName}) =>
{
    return (
      <div className="displayName">
        {meows[0].user.displayName}<Avatar photo={meows[0].user.photo} />
      </div>
    );
}



export default Profile;

