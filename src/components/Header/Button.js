import { Container, Col } from "react-bootstrap";
import "../common/button.scss";

const Button1 = ({onClick}) => {
  return (
    <Container>
      <Col xl={2} lg={2} sm={8} className="p-0">
        <button type="submit" onClick={onClick} className="my-button">Read More</button>
      </Col>
    </Container>
  );
}

export default Button1;
