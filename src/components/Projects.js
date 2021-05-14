import React from "react";
import { Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Projects = ({ project }) => {
  return (
    <Card className="my-3 p-3 rounded" border="primary">
      <Card.Body>
        <Card.Title as="h3" style={{ color: "#44d9e8" }}>
          <strong>{project.name}</strong>
        </Card.Title>
        <Card.Img
          src={project.image}
          variant="top"
          style={{ width: "10rem" }}
        />
        <Card.Text as="p" style={{ color: "#44d9e8" }}>
          {project.description}
        </Card.Text>
        <Card.Link href={project.link}>
          <h1>
            <FaGithub />
          </h1>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Projects;
