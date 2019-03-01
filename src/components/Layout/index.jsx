import PropTypes from "prop-types";
import React from "react";
import "./Layout.css";

const TemplateWrapper = ({ children }) => (
  <div>{children}</div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
