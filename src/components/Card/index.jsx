import React from "react";

const Card = ({ image, title, content }) => {
  return (
    <div className="card">
      <div>
        <img src={image} />
        <h4>{title}</h4>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Card;
