import React from "react";
import "./ClientList.css";
import Logo5Rebels from "../../images/Logo5Rebels.png";
import LogoTidy from "../../images/LogoTidy.png";
import LogoVikingFlom from "../../images/LogoVikingFlom.png";
import LogoDoskofoto from "../../images/LogoDoskofoto.png";



export default class ClientList extends React.Component {
  render() {
    return (
      <div className="ClientList">
        <div className="FeaturedTitle">
          <span>clients</span>
          <h3>building trust</h3>
        </div>
        <ul className="ClientList__List">
          <li>
            <img src={Logo5Rebels} alt="5 Rebels" />
          </li>
          <li>
            <img src={LogoTidy} alt="tidy.com" />
          </li>
          <li>
            <img src={LogoVikingFlom} alt="Viking Flom" />
          </li>
          <li>
            <img src={LogoDoskofoto} alt="Doskofoto" />
          </li>
        </ul>
      </div>
    );
  }
}
