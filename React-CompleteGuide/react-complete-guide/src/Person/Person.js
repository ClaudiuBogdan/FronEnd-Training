import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm a person. My name is {props.name} and I have {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
