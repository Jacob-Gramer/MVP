/* eslint-disable import/extensions */
import React from 'react';
import SearchForm from './SearchForm.jsx';
import StatsView from './StatsView.jsx';
import NewsView from './NewsView.jsx';

function App() {
  return (
    <div>
      <div className="banner">
        <SearchForm />
      </div>
      <StatsView />
      <NewsView />
    </div>
  );
}

export default App;
