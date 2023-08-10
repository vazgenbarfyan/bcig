import React, { useState } from "react";

import ButtonSlider from "../../slider/ButtonSlider";
import SingleNewsDataSlider from "./SingleNewsDataSlider";

const SingleNewsVideoSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== SingleNewsDataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === SingleNewsDataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(SingleNewsDataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className="container-slider"
      style={{
        height: "500px",
        margin: "0",
        position: "relative",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        clipPath: "none",
      }}
    >
      {SingleNewsDataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <video width="100%" height="100%" controls>
              <source
                src={process.env.PUBLIC_URL + `/videos/video${index + 1}.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        );
      })}
      <ButtonSlider moveSlide={nextSlide} direction={"next"} />
      <ButtonSlider moveSlide={prevSlide} direction={"prev"} />

      <div
        className="container-dots"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}
      >
        {Array.from({ length: 2 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SingleNewsVideoSlider;
