import React from "react";

function CardContainer(props) {
  return (
    <div className="flex flex-wrap flex-auto xl:mx-20 mx-3 py-2 justify-center lg:justify-start">{props.children}</div>
  );
}

export default CardContainer;