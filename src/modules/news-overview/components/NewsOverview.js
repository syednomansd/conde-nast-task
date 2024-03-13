import React from "react";
import "../../../styles/news.css"; // Import news.css
import { Link } from "react-router-dom";
import { useNews } from "../hooks/useNews";
import Pagination from "../../../components/Pagination";
import NewsItem from "./NewsItem";

const NewsOverview = () => {
  const {
    currentNews,
    onPageChange,
    currentPage,
    totalPages,
    isLoading,
    error
  } = useNews();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      {/* Display news */}
      <div className="main-content">
        <ul>
          {currentNews.map((article) => (
            <li key={article.id}>
              <Link to={`/news/${article.id}`}>
                <NewsItem article={article} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </section>
  );
};

export default NewsOverview;
