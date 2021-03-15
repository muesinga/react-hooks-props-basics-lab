import React from "react";
import Links from "./Links";

function About(props) {
  // if (!props.bio) return null;
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
      {/* <a href={props.links.github}>Github</a>
      <a href={props.links.linkedin}>Linkedin</a> */}
    </div>
  );
}

export default About;
