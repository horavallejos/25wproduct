import { Col, Container, Accordion } from "react-bootstrap";
import "./services-styles.scss";
import nun from "../../Assets/images/section4-image.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <img src={nun} className="my-img-services" alt="Services"/>
      <Container className="my-container-services">
        <Col xl={7} lg={7} sm={7} className="my-accordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header >Sed ut perspiciatis</Accordion.Header>
              <Accordion.Body className="p-4 m-2 accordion-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header >Ut enim ad minima veniam</Accordion.Header>
              <Accordion.Body className="p-4 m-2 accordion-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Sit amet, consectetur, adipisci
              </Accordion.Header>
              <Accordion.Body className="p-4 m-2 accordion-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Container>
    </div>
  );
};

export default Services;