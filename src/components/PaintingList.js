import React from "react";
import Painting from "./Painting";
import propTypes from "prop-types";

const PaintingList = ({ paintings }) => (
  <ul>
    {paintings.map(({ id, url, title, price, author, quantity }) => (
      <li key={id}>
        <Painting
          url={url}
          title={title}
          price={price}
          profileUrl={author.url}
          tag={author.tag}
          quantity={quantity}
        />
      </li>
    ))}
  </ul>
);

PaintingList.propTypes = {
  paintings: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default PaintingList;
