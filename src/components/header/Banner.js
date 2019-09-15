import React from 'react';
import catBanner from '../../static/catBanner.jpg'


const Banner = () => {
  return (
    <div>
      <img src={catBanner} alt="Row of cats" className="main_image"></img>
    </div>
  );
};

export default Banner;