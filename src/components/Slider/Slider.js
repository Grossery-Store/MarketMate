import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thefruitshop.in/images/header3/slider2.jpg"
          alt="First slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thefruitshop.in/images/header3/slider1.png"
          alt="Second slide"
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.f14d6ded2c1359949bba681f728133cf?rik=VlJ7RpcbEr8Itg&pid=ImgRaw&r=0"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
