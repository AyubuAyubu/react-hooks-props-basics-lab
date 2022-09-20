import React from "react";
import Links from "./Links";

function ifBioIsEmpty(bio) {
   if(bio) {
      return <p>{bio}</p>
   } 
}
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {ifBioIsEmpty(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github={props.github} />
      </div>
  );
}

export default About;
