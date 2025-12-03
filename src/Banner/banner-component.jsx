import React from "react";
import { BannerStyle } from "./banner-style";

const BannerComponent = () => {
  return (
    <BannerStyle>
      <div className="banner">
        <h1 className="banner__title">Learners Today, Leaders Tomorrow</h1>
        <p className="banner__subtitle">
          With our continuous research and development, we provide you with 
          an excellent Aptitude training.
        </p>
      </div>

      <div className="courses">
        <h2 className="courses__title">Our Courses</h2>
        <p className="courses__subtitle">
          Explore a wide range of curated courses for every learner. 
          Structured to enhance knowledge, skills, and career growth.
        </p>
      </div>
    </BannerStyle>
  );
};

export default BannerComponent;
