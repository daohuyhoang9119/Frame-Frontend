import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carsouel__item">
        <img
          className="d-block w-full h-2/5"
          src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carsouel__item">
        <img
          className="d-block w-full h-2/5"
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carsouel__item">
        <img
          className="d-block w-full h-2/5 "
          src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
