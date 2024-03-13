import React from 'react';
import oscar from '../../../images/oscar.png'

const NewsItem = ({ article }) => {
  if (!article) {
    return null;
  }

  const { id, title, teaser, date } = article;

  return (
    <div key={id}>
      <img src={oscar} alt="" />
      <span>Kommentar</span>
      <h2>{title}</h2>
      <h3>{teaser}</h3>
      <p>{date}</p>
    </div>
  );
};

export default NewsItem;
