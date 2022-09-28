/* eslint-disable import/extensions */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function NewsView({ news }) {
  if (news.length < 1) return (<div>No Current News</div>);
  const newsList = news.slice(0, 11);
  return (
    <Carousel id="carousel_view">
      {newsList.map((item) => (
        <Carousel.Item key={item.title}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <img src={item.img} alt="thumbnail" />
          </a>
          <Carousel.Caption className="carousel_captions">
            <h2>{item.title}</h2>
            <p>{item.short_desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

  );
}

export default NewsView;
