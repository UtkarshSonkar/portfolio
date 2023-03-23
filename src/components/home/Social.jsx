import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://wa.me/918887995238"
        className="home__social-icon-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-whatsapp"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/utkarsh-sonkar-930358153/"
        className="home__social-icon-linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/UtkarshSonkar"
        className="home__social-icon-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
