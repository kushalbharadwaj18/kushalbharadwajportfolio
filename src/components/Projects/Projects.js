import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "C:\\Users\\pc\\OneDrive\\Desktop\\newportfolio\\portofolio\\src\\Assets\\project1.png";
import project2 from "C:\\Users\\pc\\OneDrive\\Desktop\\newportfolio\\portofolio\\src\\Assets\\project2.png";
import project3 from "C:\\Users\\pc\\OneDrive\\Desktop\\newportfolio\\portofolio\\src\\Assets\\project3.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="E-portal for Case Management"
              description="This project is designed to facilitate case management and pre-trial conferences. It aims to streamline the legal process by providing a centralized platform for lawyers, judges, and clients to manage cases, schedule and conduct pre-trial conferences, and maintain case-related documentation."
              ghLink="https://github.com/Hariabc/my"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Plagiarism Detection System"
              description="Design and implementation of a plagiarism detection tool
That can analyze the program code written by the user and returns the result whether the code is copied or not
And it will show who copied from whom. It involves developing a tool to identify instances of copied or unoriginal content.
"
              ghLink="https://github.com/Rahulchaudhary792/plagiarism"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Movie Ticket Booking App"
              description="A movie ticket booking app involves developing a user-friendly platform for browsing movies, selecting showtimes, and booking tickets. This project would include features for user authentication, movie browsing, seat selection, payment integration, and user management."
              ghLink="https://github.com/Rahulchaudhary792/moviesnow/tree/master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
