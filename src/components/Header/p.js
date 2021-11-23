import { Container, Col } from "react-bootstrap";
import "./header-styles.scss";

export default function P() {
  return (
    <Container>
      <Col xl={4} lg={7} sm={7} className="p-0">
        <p className="my-p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </p>
      </Col>
    </Container>
  );
}
