import React from "react";

import "../Styles/Card.css";

const Card = (props) => {
  const { handleEdit, handleDelete, id, country, location, continent, imageurl, rating } = props;
  return (
    <div className="cardWrapper">
      <h3>Id {id}</h3>
      <h2>Country: {country}</h2>
      <h2>Location: {location}</h2>
      <h2>Continent: {continent}</h2>
      <h2>Rating: {rating}</h2>
      <img alt="location" src={imageurl} />
      <div className="buttonWrapper">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
