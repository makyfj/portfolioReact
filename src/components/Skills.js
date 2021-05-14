import React from "react";
import { Card } from "react-bootstrap";

const Skills = ({ skill }) => {
  return (
    <Card className="my-3 p-3 rounded" border="secondary">
      <Card.Img src={skill.image} variant="top" style={{ width: "10rem" }} />
      <Card.Body>
        <Card.Title as="h3" style={{ color: "#44d9e8" }}>
          <strong>{skill.language}</strong>
        </Card.Title>
        <Card.Text as="p" style={{ color: "#44d9e8" }}>
          {skill.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Skills;
