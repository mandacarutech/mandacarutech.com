import React from "react"
import "./SummaryCard.css"
import { IconContext } from "react-icons";

export default class SummaryCard extends React.Component {
  render() {
    const { text, title, icon } = this.props;
    return (
      <IconContext.Provider value={{ size: "2em", color: "#1F243D"}}>
      <div className="SummaryCard">
        <div className="SummaryCard__Circle">{icon}</div>
        <h3 className="SummaryCard__Title">{title}</h3>
        <p className="SummaryCard__Text">
          {text}
        </p>
      </div>
      </IconContext.Provider>
    )
  }
}
