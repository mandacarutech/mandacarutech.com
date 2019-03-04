import PropTypes from "prop-types"
import React from "react"
import "./Layout.css"
import Footer from "../Footer"

const TemplateWrapper = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
