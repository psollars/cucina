import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return <Link style={{ textDecoration: "none" }} {...props} />;
}
