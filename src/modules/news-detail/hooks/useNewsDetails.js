import { useState, useEffect } from 'react';
import { fetchNews } from '../../../utils/api'; 
import { useParams } from "react-router-dom";

export const useNewsDetails = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setIsLoading(false);
      }
    };

    fetchNewsData();
  }, [id]); // Fetch news details whenever id changes

  return { news, isLoading };
};
