import React from "react";

function CardContainer(props) {
  return (
    <div className="flex flex-wrap flex-auto mx-20 justify-center lg:justify-start">{props.children}</div>
  );
}

export default CardContainer;