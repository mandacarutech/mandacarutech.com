import React from "react"
import "./NavigationBar.css"
import logo from "../../images/MandacaruLogo@3x.png";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="NavigationBar">
        <div className="NavigationBar__column">
          <img
            src={logo}
            class="NavigationBar__logo"
            alt="Mandacaru Technologies"
          />
        </div>
        <div className="NavigationBar__column">
          <nav className="NavigationBar__nav">
            <ul>
              <li>
                <a href="http://">About us</a>
              </li>
              <li>
                <a href="http://">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
