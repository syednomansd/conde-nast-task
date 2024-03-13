import React from 'react';
import NewsOverview from '../modules/news-overview/components/NewsOverview';

const Home = () => {
  return (
    <section className="wrapper">
      <main>
        <h1>Entertainment</h1>
        <NewsOverview />
      </main>
    </section>
  );
};

export default Home;
