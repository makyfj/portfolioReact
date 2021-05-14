import React from "react";
import Projects from "../components/Projects";
import projects from "../projects";
import { Container, Card, Row, Col } from "react-bootstrap";
import CodingPic from "../images/coding.jpeg";

const ProjectsScreen = () => {
  return (
    <>
      <Container>
        <Card className="text-center" border="secondary">
          <Card.Header as="h2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. I'm taking on freelance work at the
            moment. Want some help building your software?
          </Card.Header>
          <Card.Body>
            <Card.Img
              src={CodingPic}
              variant="top"
              style={{ width: "60rem" }}
            />
            <Card.Title>
              <Card.Text as="h3">
                <br />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. I'm taking on freelance work at the
                moment. Want some help building your software?
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
      </Container>
    </>
  );
};

export default ProjectsScreen;
