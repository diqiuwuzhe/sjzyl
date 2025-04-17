import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      ))}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;