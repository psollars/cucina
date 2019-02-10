import React from "react";

export default function(props) {
  const { quantity, unit, description } = props;

  return (
    <>
      <li>{`${quantity} ${unit} ${description}`}</li>
    </>
  );
}
