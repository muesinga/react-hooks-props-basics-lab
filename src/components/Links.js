import React from "react";


function Links(props) {
  return (
    <div>
      <h3> Links </h3>
      <a href={props.github}>Github</a>
      <a href={props.linkedin}>Linkedin</a>
    </div>
  );
}

export default Links;
