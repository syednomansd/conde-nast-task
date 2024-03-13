import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NewsDetail from './modules/news-detail/components/NewsDetail';
import NewsOverview from './modules/news-overview/components/NewsOverview';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/news" element={<NewsOverview />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
