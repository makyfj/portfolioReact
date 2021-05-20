import React from "react";
import { Card } from "react-bootstrap";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = ({ project }) => {
  return (
    <Card className="my-3 p-3 rounded" border="secondary">
      <Card.Body>
        <Card.Title as="h3" style={{ color: "#44d9e8" }}>
          <strong>{project.name}</strong>
        </Card.Title>
        <Card.Img src={project.image} variant="top" style={{ width: "4rem" }} />
        <Card.Text as="p" style={{ color: "#44d9e8" }}>
          {project.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={project.link}>
          <FaGithub fontSize="30" />
        </Card.Link>
        {project.webPage && (
          <Card.Link href={project.link}>
            <FaLink fontSize="30" />
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default Projects;
