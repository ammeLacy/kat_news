import React from 'react';
import banner from '../../static/banner.jpg'


const Banner = () => {
  return (
    <div>
      <img src={banner} alt="Row of cats" className="main_image"></img>
    </div>
  );
};

export default Banner;