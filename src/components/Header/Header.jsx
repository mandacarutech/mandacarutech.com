import React from "react"
import "./Header.css";
import NavigationBar from "../NavigationBar";
import CallToAction from "../CallToAction";
import CactusLogo from "../../images/CactusLogo.png";

export class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="Header_Wrapper">
          <NavigationBar />
          <CallToAction/>
          <img className="CactusImg" src={CactusLogo} alt="mandacaru" />
        </div>
        <div className="BackgroundCurve" />
      </header>
    )
  }
}
