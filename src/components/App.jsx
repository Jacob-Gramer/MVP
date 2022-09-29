/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';
import StatsView from './StatsView.jsx';
import NewsView from './NewsView.jsx';
import Login from './Login.jsx';

function App() {
  const [rankData, setRankData] = useState({});
  const [news, setNews] = useState([]);
  const [pred, setPred] = useState(0);

  const handleSearch = (name, plat) => {
    axios.get(`http://localhost:8080/${name}/${plat}/stats`)
      .then((response) => setRankData(response.data))
      .catch((err) => console.error(err))
      .then(() => axios.get(`http://localhost:8080/${plat}/rp`))
      .then((response) => setPred(response.data.RP[plat].val))
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
        <StatsView rankData={rankData} pred={pred} />
      </div>
      <div>
        <NewsView news={news} />
      </div>
      <Login handleSearch={handleSearch} />
    </div>
  );
}

export default App;
