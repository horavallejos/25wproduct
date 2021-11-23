import imagen1 from "../../../Assets/images/slider-1.png";
import imagen2 from "../../../Assets/images/slider-2.png";
import imagen3 from "../../../Assets/images/slider-3.png";
import { Container } from "react-bootstrap";

export default function Slider({ imageIndex }) {
  const miArr = [imagen1, imagen2, imagen3];
console.log(imageIndex)
  return (
    <Container fluid className="my-img-slider"  >
      <img src={miArr[imageIndex]} className="my-image" alt="Imagen {miArr[imageIndex]}"/>
    </Container>
  );
}

