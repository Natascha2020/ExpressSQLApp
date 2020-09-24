import React from "react";

import "../Styles/Card.css";

const Card = (props) => {
  const { handleEdit, handleDelete, id, data } = props;
  return (
    <div className="cardWrapper">
      <h3>Id {id}</h3>
      <h2>Country: {data.country}</h2>
      <h2>Location: {data.location}</h2>
      <h2>Continent: {data.continent}</h2>
      <h2>Rating: {data.rating}</h2>
      <img alt="location" src={data.imageurl} />
      <div className="buttonWrapper">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
