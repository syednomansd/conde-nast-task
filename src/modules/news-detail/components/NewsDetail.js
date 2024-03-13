import React from 'react';
import '../../../styles/news-detail.css'; // Import news-detail.css
import { useParams } from "react-router-dom";
import { useNewsDetails } from "../hooks/useNewsDetails";
import oscar from '../../../images/oscar.png';
import ansehen from '../../../images/ansehen.png';

const NewsDetail = () => {
  const { id } = useParams();
  const { news, isLoading } = useNewsDetails();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const selectedArticle = news.find(article => article.id === parseInt(id));

  if (!selectedArticle) {
    return <div>Article not found</div>;
  }

  const { title, teaser, content, date } = selectedArticle;

  return (
    <section className="wrapper">
      <main className="main-inner">
        <h2>Kommentar</h2> 
        <h3>{title}</h3>
        <span>{teaser}</span>
        <h4>Von Ulf Pape <span>{date}</span></h4>
        <img src={oscar} alt="" />
        <div className="desc">
          <div>
            <p>{title}</p>
            <p>{content}</p>
          </div>
          <div>
            <img src={ansehen} alt="" />
          </div> 
        </div>
      </main>
    </section>
  );
};

export default NewsDetail;