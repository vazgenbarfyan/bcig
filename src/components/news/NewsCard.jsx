import React from "react";

import "./news.css";

const NewsCard = ({ article }) => {
  if (!article.title) return null;
  return (
    <div className="news-card">
      <h3>{article.title}</h3>
      <a href={article.url}>
        <button type="submit" className="read-more-button">
          Read More
        </button>
      </a>
    </div>
  );
};

export default NewsCard;
