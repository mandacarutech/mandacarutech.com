import React from "react"
import "./Footer.css"
import { IconContext } from "react-icons"
import { FaEnvelopeOpen } from "react-icons/fa"

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <IconContext.Provider value={{ size: "2em", color: "#FFFFFF" }}>
          <ul className="Footer__SocialLinks">
            <li>
              <a href="mailto:ivan@mandacarutech.com" title="Contact">
                <FaEnvelopeOpen/>
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </footer>
    )
  }
}
