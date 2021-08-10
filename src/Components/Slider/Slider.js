// / src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SliderCompnent(props) {
  return (
    <div className="slider-section">
      <h2>My Image Gallery</h2>
      <Carousel autoPlay interval="5000" transitionTime="100">
        {props.item.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} />
              <p className="legend">My Classic Still 1</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
