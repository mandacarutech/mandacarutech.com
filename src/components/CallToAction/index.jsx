import React from "react";
import "./CallToAction.css";

export default class CallToAction extends React.Component {
  render() {
    return (
      <div className="CallToAction">
        <h3>Leave the tech to us, focus on your mission</h3>
        <h2>We develop clear-cut web and mobile experiences</h2>
        <a href="javascript:void(0)" className="CallToAction__learn-more">Learn More</a>
      </div>
    );
  }
}
