import React from 'react';
import errorcat from '../../static/errorCat.jpg'

const Error = ({ location }) => {
  if (location === undefined || location.state === undefined) {
    return (
      <>
        <div className="error">
          <h1 id="errorText">ERROR</h1>
          <img src={errorcat} alt="Puzzled Cat" className="responsive"></img>
        </div>
      </>
    );
  }
  const { status, statusText } = location.state;
  return (
    <>
      <div className="error">
        <h1>ERROR</h1>
        <p>{status}</p>
        <p>{statusText}</p>
        <img src={errorcat} alt="Puzzled Cat" className="responsive"></img>
      </div>
    </>
  );
}

export default Error;