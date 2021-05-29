import React from "react";
import propTypes from "prop-types";

const Logo = ({ text }) => <div>{text}</div>;

Logo.propTypes = {
  text: propTypes.string.isRequired,
};

export default Logo;
