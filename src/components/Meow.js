import React from "react";
import Username from "./Username";
import Icon from "./Icon";
import Profile from "./Profile";
import Hashtag from "./Hashtag";
// import Timeline from "./Timeline";

const Meow = ({ user, text, hashtags, replies, likes }) => (
  <div className="Meow">
    {/* <Timeline /> */}
    <div className="top-section">
      <Username name={user.username} />
      <Profile displayName={user.displayName} />
    </div>
    <div className="mid-section">
      <p>{text}</p>
      {hashtags.map((hash) => (
        <Hashtag key={hash} children={hash} />
      ))}
      <div className="hashtags"></div>
    </div>
    <div className="bottom-section">
      <Icon type="replies" number={replies} />
      <Icon type="likes" number={likes} />
    </div>
  </div>
);

export default Meow;

