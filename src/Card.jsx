import React from "react";
import "./Card.css";

const Card = ({ title, description, icon, cl }) => {
  return (
    <div className={cl + " card"}>
      <div className="card__icon flex-jc-c-ai-c">
        <img src={icon} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
