import React from "react";

const Thing: React.FC<{ msg: string }> = props => {
  return <div>{props.msg}</div>;
};

export default () => (
  <div>
    Hello World. 
  </div>
);
