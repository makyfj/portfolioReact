import React from "react";
import ProfilePic from "../images/profile.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import Skills from "../components/Skills";
import skills from "../skills";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Card className="text-center" border="primary">
          <Card.Header as="h2">
            Hi, I am currently pursuing a masters in Computer Science at Adelphi
            University. I work part-time as a graduate teaching assistant for
            Introduction to Programming with Python. I love to code >:)
          </Card.Header>
          <Card.Body>
            <Card.Img
              src={ProfilePic}
              variant="top"
              style={{ width: "20rem" }}
            />
            <Card.Title as="h2">What I do?</Card.Title>
            <Card.Text as="h3">
              I have been programming for 4 years with different technologies.
              Below is a quick overview of my main technical skill sets and
              technologies I use.
            </Card.Text>
          </Card.Body>
        </Card>
        <Row>
          {skills.map((skill) => (
            <Col key={skill.id} sm={8} md={6} lg={4} xl={4}>
              <Skills skill={skill} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
