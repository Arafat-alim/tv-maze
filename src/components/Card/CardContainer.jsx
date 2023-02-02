import React from "react";
import "./cardContainer.css";
import { cardsData } from "../../datas";
import Card from "./Card";

function CardContainer({ genre }) {
  const data = cardsData.map((item) => {
    return (
      <Card
        title={item.title}
        content={item.content}
        key={item.id}
        imgUrl={item.imgUrl}
      />
    );
  });
  return (
    <div className="card-container">
      <h1>{genre.toUpperCase()}</h1>
      {data}
    </div>
  );
}

export default CardContainer;
