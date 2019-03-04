import React from "react"
import "./Summary.css"
import SummaryCard from "../SummaryCard"
import { FaLaptop, FaMobile, FaDesktop, FaNetworkWired } from "react-icons/fa";

export default class Summary extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Summary">
          <div className="WhoWeAre">
            <div className="FeaturedTitle">
              <span>who</span>
              <h3>Who we are</h3>
            </div>
            <p className="WhoWeAre__Text">
              Right from the start Mandacaru has been working under the staff
              augmentation paradigm. Understanding the needs of each particular
              business is the first step towards project execution success. The
              familiarization of the business’ day to day practices are integral
              to the steps of our software development lifecycle. Our team
              thinks and acts about projects as if they were one with your
              company. This allows for a painless process of ramping up and
              ramping down and one more aligned with the demand.
            </p>
          </div>
          <div className="SummaryCards">
            <div className="SummaryCards__Column SummaryCards__Column--left">
              <SummaryCard title="web" text="We specialize developing web applications with React, Node.js, Golang and Wordpress." icon={<FaLaptop/>} />
              <SummaryCard title="mobile" text="We leverage the power of React Native to build mobile applications for Android and IOS." icon={<FaMobile/>}  />
            </div>
            <div className="SummaryCards__Column SummaryCards__Column--right">
              <SummaryCard title="devops" text="Management and CI/CD infrastructure configuration with Docker and Kubernetes." icon={<FaDesktop/>}  />
              <SummaryCard title="distributed systems" text="We help you architect your system using microservices and fault-tolerance techniques." icon={<FaNetworkWired/>}  />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
