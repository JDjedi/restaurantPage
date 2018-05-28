import React from "react";
import { render } from "react-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={950}
        naturalSlideHeight={500}
        totalSlides={3}
      >        
        <Slider id="carousel-slider">
          <Slide index={0}><img src="./images/pp1.jpg" /></Slide>
          <Slide index={1}><img src="./images/pp2.jpg" /></Slide>
          <Slide index={2}><img src="./images/pp3.jpg" /></Slide>
        </Slider>
        <div id="next-back-buttons">
	        <ButtonBack>Back</ButtonBack>
	        <ButtonNext>Next</ButtonNext>
        </div>

      </CarouselProvider>
    );
  }
}