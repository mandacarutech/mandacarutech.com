import React from "react"
import "./NavigationBar.css"
import logo from "../../images/MandacaruLogo@3x.png"

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="NavigationBar">
        <div className="NavigationBar__column">
          <a href="/" title="Mandacaru Technologies - Home">
            <img
              src={logo}
              class="NavigationBar__logo"
              alt="Mandacaru Technologies"
            />
          </a>
        </div>
        <div className="NavigationBar__column">
          <nav className="NavigationBar__nav">
            <ul>
              {/* <li>
                <a href="http://" title="About us">About us</a>
              </li>
              <li>
                <a href="http://" title="Contact">Contact</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
