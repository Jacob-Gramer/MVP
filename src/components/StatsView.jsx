import React from 'react';

function StatsView({ rankData, pred }) {
  if (Object.keys(rankData).length < 1) return (<span className="news_stats">No Player Chosen</span>);
  console.log(rankData.rank);
  return (
    <div id="stats_view">
      <div className="ranks">
        {rankData.name}
        <img className="rank_badge" src={rankData.rank.rankImg} alt="rank badge" />
      </div>
      <div className="ranks">
        <img className="rank_badge" src="https://api.mozambiquehe.re/assets/ranks/silver4.png" alt="silver4" />
        {`RP From Silver: ${3000 - rankData.rank.rankScore}`}
      </div>
      <div className="ranks">
        <img className="rank_badge" src="https://api.mozambiquehe.re/assets/ranks/gold4.png" alt="gold4" />
        {`RP From Gold: ${5400 - rankData.rank.rankScore}`}
      </div>
      <div className="ranks">
        <img className="rank_badge" src="https://api.mozambiquehe.re/assets/ranks/platinum4.png" alt="platinum4" />
        {`RP From Platinum: ${8200 - rankData.rank.rankScore}`}
      </div>
      <div className="ranks">
        <img className="rank_badge" src="https://api.mozambiquehe.re/assets/ranks/diamond4.png" alt="diamond4" />
        {`RP From Diamond: ${11400 - rankData.rank.rankScore}`}
      </div>
      <div className="ranks">
        <img className="rank_badge" src="https://api.mozambiquehe.re/assets/ranks/master.png" alt="master" />
        {`RP From Masters: ${15000 - rankData.rank.rankScore}`}
      </div>
      <div className="ranks">
        <img className="rank_badge" src="https://files.cults3d.com/uploaders/15189044/illustration-file/9cb4eebe-08b5-4ed9-aec6-77d1f739375a/1_large.png" alt="predator" />
        {`RP from Predator: ${pred - rankData.rank.rankScore}`}
      </div>
    </div>
  );
}

export default StatsView;
