import React, { useState } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";

const ContactScreen = () => {
  const emailLink = "franklinjaradev@gmail.com";
  const [submit, setSubmit] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit("Sending...");

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await axios.post("http://localhost:5000/contact", {
      details,
    });

    setSubmit("Submit");
    let result = await response.json();
    console.log(result.status);
  };

  return (
    <>
      <Card className="text-center" border="secondary">
        <Card.Header as="h2">Contact</Card.Header>
        <Card.Body>
          <Card.Text as="h5">
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact from below or send me an email to
            <a id="contactEmail" href={`mailto:${emailLink}`}>
              franklinjaradev@gmail.com
            </a>
          </Card.Text>
          <br />
          <Card.Text as="h5">
            Want to get connected? Get in touch with me on the social channels
            below
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="text-center" border="primary">
        <Card.Header as="h2"> Get In Touch</Card.Header>
        <Form onSubmit={handleSubmit}>
          <Card.Body>
            <Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" required />
              </Form.Group>

              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
            </Row>
            <br />
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} required />
            </Form.Group>
            <br />
            <Button variant="secondary" type="submit">
              {submit}
            </Button>
          </Card.Body>
        </Form>
      </Card>
    </>
  );
};

export default ContactScreen;
