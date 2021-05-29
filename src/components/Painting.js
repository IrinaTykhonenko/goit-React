import React from "react";
import PropTypes from "prop-types";

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

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
