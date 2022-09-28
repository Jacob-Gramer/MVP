import React from 'react';

function StatsView({ rankData }) {
  if (Object.keys(rankData).length < 1) return (<span className="news_stats">No Player Chosen</span>);
  return (
    <div id="stats_view">
      {rankData.name}
      <img src={rankData.rank.rankImg} alt="rank badge" />
    </div>
  );
}

export default StatsView;
