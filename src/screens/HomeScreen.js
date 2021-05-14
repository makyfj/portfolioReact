import React from "react";
import ProfilePic from "../images/profile.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import Skills from "../components/Skills";
import skills from "../skills";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4}>
            <Image src={ProfilePic} alt="Franklin Jara" thumbnail />
          </Col>
          <Col xs={8}>
            <br />
            <h2>
              Hi, my name is Franklin Jara and I recently graduated in Computer
              Programming and Information Systems. Welcome to my personal
              website!
            </h2>
            <br />
            <h2>What I do?</h2>
            <br />
            <h4>
              I have been programming for 4 years with different technologies.
              Below is a quick overview of my main technical skill sets and
              technologies I use.
            </h4>
          </Col>
        </Row>
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
