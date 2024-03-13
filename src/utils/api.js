import { NEWS_API_PATH } from './constants';

export const fetchNews = async () => {
  try {
    const response = await fetch(NEWS_API_PATH);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch news');
  }
};