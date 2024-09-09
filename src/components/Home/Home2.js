import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Monica.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em" }}>
              HELLO, I'M <span className="purple"> MONICA SRIRAMREDDY</span>
            </h1>
            <p className="home-about-body">
              I specialize in building scalable web technologies using modern frameworks like 
              <i>
                <b className="purple"> React.js, Node.js, and Next.js.</b>
              </i>
              <br />
              <br />
              As a  <b className="purple"> full-stack developer </b>  I am passionate about creating seamless user experiences and efficient backend systems. 
              My interests extend to exploring the innovative world of <b className="purple">blockchain</b> and developing decentralized applications.
              <br />
              <br />
              I enjoy working on projects that combine cutting-edge technology with practical solutions, 
              and I'm always eager to learn and grow in the field of software development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Monica-Sriramreddy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/monicasriram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/monica-sriramreddy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/monicasriram"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
