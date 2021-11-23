//import { useState, createContext } from "react";
import { Col, /* Container */ } from "react-bootstrap";
import "../../Header/header-styles.scss";


export default function ControllSlide({onClick}) {
  return (
    <Col lg={6} sm={8} className="my-slider">
      <div onClick={onClick} data-value="1" className="my-bullet"></div>;
      <div onClick={onClick} data-value="2" className="my-bullet"></div>;
      <div onClick={onClick} data-value="3" className="my-bullet"></div>;
    </Col>
  );
}
