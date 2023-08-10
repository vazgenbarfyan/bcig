import React from "react";
import Carousel from "./Carousel";
import "./singleNewsImageSlider.css";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SingleNewsImageSlider = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);

export default SingleNewsImageSlider;
