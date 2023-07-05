import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.image} className="work__img" />
      {/* <div className="overlay">
        <div className="content">
          <p>This is the workitem description section</p>
        </div>
      </div> */}
      <h3 className="work__title">{item.title}</h3>
      <span className="work__skills"> {item.skills}</span>
      <div className="work__button">
        <a href={item.url} className="work__url">
          Github
        </a>
        <a href={item.demo} className="work__link ">
          {item.demo ? "DEMO" : ""}
        </a>
        {/* <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
      </div>
    </div>
  );
};

export default WorkItems;
