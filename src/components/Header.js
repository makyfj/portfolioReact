import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Franklin Jara</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <a href="https://github.com/makyfj">
                <h2>
                  <FaGithub />
                </h2>
              </a>
              <a href="https://linkedin.com/">
                <h2>
                  <FaLinkedin />
                </h2>
              </a>
              <LinkContainer to="/projects">
                <Navbar.Brand>Projects</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Navbar.Brand>Contact</Navbar.Brand>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
