import React from 'react';
import spinner from '../../static/Logo.gif'

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner">
      <p> ... Loading</p>
      <img src={spinner} alt="Cat spinning round" height="42" width="42"></img>
    </div>
  );
}

export default LoadingSpinner;