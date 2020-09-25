import React from "react";

import "../Styles/Card.css";

const Card = (props) => {
  const { handleEdit, handleDelete, id, data } = props;

  let continentClasses = "continent " + data.continent.toLowerCase();

  return (
    <div className="card">
      <h3 className="id">Id: {id}</h3>
      <h2 className="country">{data.country}</h2>
      <h2 className="location">{data.location}</h2>
      <h2 className={continentClasses}>{data.continent}</h2>

      <img alt="location" src={data.imageurl} />
      <div className="buttonWrapper">
        <h2 className="rating">Rating: {data.rating}</h2>
        <button className="button" onClick={handleEdit}>
          New image
        </button>
        <button className="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
