import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Monica SriramReddy</span> from <span className="purple">Boston, MA.</span>
            <br />
            Here are a few things I enjoy outside of work:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full-Stack Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain Exploration
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Every line of code is a step toward innovation."
          </p>
          <footer className="blockquote-footer">Monica Sriramreddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
