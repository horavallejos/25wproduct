import { Container, Col } from "react-bootstrap";
import "./header-styles.scss";

export default function H1Func() {
  return (
    <Container>
      <Col xl={6} lg={9} sm={8} className="p-0">
        <h1 className="my-h1 text-wrap">
          Sed ut perspiciatis unde omnis iste natus
        </h1>
      </Col>
    </Container>
  );
}
