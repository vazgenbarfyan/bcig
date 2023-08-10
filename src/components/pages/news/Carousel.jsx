import React from "react";
import Carousel from "react-material-ui-carousel";
import imageSlider from "./imageSlider.json";

function CarouselImages() {
  return (
    <Carousel height={500} navButtonsAlwaysVisible={true}>
      {imageSlider.map((item, index) => {
        return (
          <div key={item.id}>
            <img
                width={"100%"}
                height={"100%"}
              src={
                process.env.PUBLIC_URL + `/imageSlider/photo${index + 1}.jpg`
              }
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselImages;
