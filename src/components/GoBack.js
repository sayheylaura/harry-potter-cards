import React from "react";
import { Link } from "react-router-dom";
import "./goBack.scss";

const GoBack = () => (
  <Link className="go-back" to="/">
    Go back
  </Link>
);

export default GoBack;
