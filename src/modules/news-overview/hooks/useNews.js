// useNews.js
import { useState, useEffect } from "react";
import { fetchNews } from "../../../utils/api"; // Import your fetchNews function

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(5);

  useEffect(() => {
    const fetchNewsData = async () => {
      setIsLoading(true); // Set loading state to true while fetching
      try {
        const data = await fetchNews();
        setNews(data);
        setIsLoading(false); // Set loading state to false when data is fetched
      } catch (error) {
        setError(error); // Set error state if there's an error
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchNewsData();
  }, []);

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = news.length / newsPerPage;

  return {
    currentNews,
    onPageChange,
    currentPage,
    totalPages,
    isLoading,
    error
  };
};
