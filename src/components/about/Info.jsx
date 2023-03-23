import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Software Intern @Fortanix</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">College</h3>
        <span className="about__subtitle">IIT Kanpur-2021 Graduate</span>
      </div>

      <div className="about__box">
        <i class="bx bx-laptop about__icon"></i>
        <h3 className="about__title">Skills</h3>
        <span className="about__subtitle">React, Nodejs, JavaScript</span>
      </div>
    </div>
  );
};

export default Info;
