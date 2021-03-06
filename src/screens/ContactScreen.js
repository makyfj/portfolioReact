import React from "react";
import { Card } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactScreen = () => {
  const emailLink = "franklinjaradev@gmail.com";
  const gitHub = "https://github.com/makyfj";
  const linkedin = "https://www.linkedin.com/in/franklin-jara-fj/";
  return (
    <>
      <Card className="text-center" border="secondary" bg="dark">
        <Card.Header as="h2">Contact</Card.Header>
        <Card.Body>
          <Card.Text as="h5">
            Interested in hiring me for your company or just want to say hi? You
            can fill in the contact from below or send me an email to
            <Card.Link id="contactLinks" href={`mailto:${emailLink}`}>
              franklinjaradev@gmail.com
            </Card.Link>
          </Card.Text>
          <br />
          <Card.Text as="h5">
            Want to get connected? Get in touch with me on the social channels
            below
          </Card.Text>
          <Card border="secondary" bg="light">
            <Card.Body>
              <Card.Link href={gitHub} id="contactLinks">
                <FaGithub fontSize="30" />
              </Card.Link>
              <Card.Link href={linkedin} id="contactLinks">
                <FaLinkedin fontSize="30" />
              </Card.Link>
              <Card.Link id="contactLinks"></Card.Link>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactScreen;
