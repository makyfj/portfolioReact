import React from "react";
import Projects from "../components/Projects";
import projects from "../projects";
import { Card, Row, Col } from "react-bootstrap";
import CodingPic from "../images/coding.jpeg";

const ProjectsScreen = () => {
  return (
    <>
      <Card className="text-center" border="primary">
        <Card.Header as="h2">
          These are some of the projects I've done and currently working on :)
        </Card.Header>
        <Card.Body>
          <Card.Img src={CodingPic} variant="top" style={{ width: "80%" }} />
          <Card.Title>
            <Card.Text as="h3">
              <br />
              Most of my recent projects are with React, Node, MongoDB, Express,
              Android and PHP.
            </Card.Text>
          </Card.Title>
        </Card.Body>
      </Card>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} sm={8} md={6} lg={4} xl={4}>
            <Projects project={project} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProjectsScreen;
