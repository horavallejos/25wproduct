import { Container } from "react-bootstrap";
import NavbarFunc from "./navbar";
import H1Func from "./h1";
import P from "./p";
import Button from "./Button";
import Slider from "./Slider/Slider";
import ControllSlide from "./Slider/ControllSlide";
import { useState } from "react";

const Header = () => {

  const [imageIndex, setimageIndex] = useState(0);

  const changeDot = (event) => {
    const val = event.target.attributes[0].nodeValue
    setimageIndex(val-1);
  };


  return (
    <header id="header" className="header">
      
      <Slider imageIndex={imageIndex} />

      <Container id="home" className="header-container">
        <NavbarFunc />
        <H1Func />
        <P />
        <Button />
        <ControllSlide onClick={changeDot}/>
      </Container>
    </header>
  );
};

export default Header;


/* export default () => {

  const [imageIndex, setimageIndex] = useState(0);

  const changeDot = (event) => {
    const val = event.target.attributes[0].nodeValue
    setimageIndex(val-1);
  };


  return (
    <header id="header" className="header">
      
      <Slider imageIndex={imageIndex} />

      <Container id="home" className="header-container">
        <Navbar_ />
        <H1Func />
        <P />
        <Button />
        <ControllSlide onClick={changeDot}/>
      </Container>
    </header>
  );
};
 */