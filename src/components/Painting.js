import React from "react";

const Painting = ({ url, title, profileUrl, tag, price, quantity }) => {
  return (
    <div>
      <img src={url} alt={title} width="480"></img>
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{tag}</a>
      </p>
      <p>Price: {price}</p>
      <p>Availability: {quantity < 10 ? "almost finish" : "available"}</p>
      <button type="button">add to cart</button>
    </div>
  );
};

export default Painting;
