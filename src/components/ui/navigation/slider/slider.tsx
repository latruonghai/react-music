import React, { useState, useEffect } from 'react';
import { data } from '../../../../typings/data/data';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import './slider.scss';
//import { useEffect } from '@storybook/addons'

const Slider = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const length = slides.length;
  let sliderInterval;

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  function auto() {
    sliderInterval = setInterval(nextSlide, 2000);
  }

  useEffect(() => {
    if (autoSlide) {
      auto();
    }
    return () => clearInterval(sliderInterval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <div className="left-arrow">
        <MdKeyboardArrowLeft onClick={prevSlide} />
      </div>
      <div className="right-arrow">
        <MdKeyboardArrowRight onClick={nextSlide} />
      </div>
      {data.map((item, i) => {
        const indexLeft = mod(current - 1, length);
        const indexRight = mod(current + 1, length);

        let className = 'slide';
        if (i === current) {
          className = 'slide slide--active';
        } else if (i === indexLeft) {
          className = 'slide slide--left';
        } else if (i === indexRight) {
          className = 'slide slide--right';
        } else {
          className = 'slide';
        }
        return (
          <img
            key={item.id}
            className={className}
            src={item.linkimg}
            alt={item.title}
          ></img>
        );
      })}
    </div>
  );
};

export default Slider;
