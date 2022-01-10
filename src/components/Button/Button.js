import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.scss"

const Button = ({ text, isDisabled = false, size="md", type="primary" }) => {
  return (
    <button
      className={classNames("button", {
        [`button--size-${size}`]: true,
        [`button--type-${type}`]: true,
        "button button--isDisabled": isDisabled
      })}
    >
      {text}
    </button>
  )
}
const btnSizes = ["sm", "md", "lg"];
const btnTypes = ["primary", "text"];

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(btnSizes),
  type: PropTypes.oneOf(btnTypes),
  isDisabled: PropTypes.bool,
};

export default Button;
