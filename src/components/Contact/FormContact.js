import { Container, Form, FloatingLabel } from "react-bootstrap";
import "./contact-styles.scss";
import "../common/button.scss"
import Button from "./Button";

const FormContact = ({ onClick, onChange }) => {
  return (
    <div className="my-container__h2-form">
      <h2 class="contact-h2">
        Get in touch<span> We are hiring!</span>
      </h2>
      <div className="my-form">
        <FloatingLabel
          controlId="floating-inp"
          label="Name"
          className="tt mb-4"
        >
          <Form.Control
            type="text"
            placeholder="###"
            name="name"
            onChange={onChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floating-inp" label="Email" className="mb-4">
          <Form.Control
            type="email"
            placeholder="###"
            name="email"
            onChange={onChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floating-inp" label="Phone" className="mb-4">
          <Form.Control
            type="phone"
            placeholder="###"
            name="phone"
            onChange={onChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floating-inp"
          label="Message"
          className="mb-4"
        >
          <Form.Control
            as="textarea"
            placeholder="###"
            style={{ height: "10rem", paddingTop: "2rem" }}
            name="message"
            onChange={onChange}
          />
        </FloatingLabel>

        <Container className="container-button">
          <Button onClick={onClick} />
        </Container>
      </div>
    </div>
  );
};


export default FormContact;

