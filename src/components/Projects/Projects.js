import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import instagram from "../../Assets/Projects/Instagram icon.png";
import rental from "../../Assets/Projects/Rental management.png"; // Replace with an appropriate image
import expenseTracker from "../../Assets/Projects/Expense tracker icon.png"; // Replace with an appropriate image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram Clone"
              description="Developed a full-stack Instagram clone with React, Node.js, and MongoDB. Features include user authentication, profile management, photo/video uploads, and real-time updates."
              ghLink="https://github.com/Monica-Sriramreddy/Instagram_Clone"
              // demoLink="https://instagram-clone-demo.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Expense Tracker"
              description="Built a full-stack expense tracker using React, Node.js, and MongoDB. Features include budget monitoring, monthly reports, and group expense tracking."
              ghLink="https://github.com/Monica-Sriramreddy/Expense_Tracker"
              // demoLink="https://expense-tracker-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Lease Lyf"
              description="Created a Java-based rental management system with a user-friendly GUI, security measures, and real-time availability checks. Ensured data security and user authentication."
              ghLink="https://github.com/Monica-Sriramreddy/Lease_lyfe"
              // demoLink="https://rental-management-demo.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
