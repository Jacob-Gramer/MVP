/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';
import StatsView from './StatsView.jsx';
import NewsView from './NewsView.jsx';

function App() {
  const [rankData, setRankData] = useState({});
  const [news, setNews] = useState([]);

  const handleSearch = (name, plat) => {
    axios.get(`http://localhost:8080/${name}/${plat}/stats`)
      .then((response) => setRankData(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios.get('http://localhost:8080/news')
      .then((response) => setNews(response.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div id="contain">
      <div className="banner">
        <SearchForm handleSearch={handleSearch} />
      </div>
      <div id="content_body">
        <span className="news_stats">
          <NewsView news={news} />
        </span>
        <span className="news_stats">
          <StatsView rankData={rankData} />
        </span>
      </div>
    </div>
  );
}

export default App;
