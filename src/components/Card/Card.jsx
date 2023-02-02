import React from "react";
import "./card.css";

function Card({ title, content, imgUrl }) {
  return (
    <div className="card">
      <img src={imgUrl} alt={`${imgUrl}12`} className="img" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;
