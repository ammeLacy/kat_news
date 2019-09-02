import React from 'react';

const Error = ({ location }) => {
  if (location === undefined || location.state === undefined) {
    return (
      <>
        <h1>ERROR</h1>
        <img src="public/errorCat.jpg" alt="Puzzled Cat" className="responsive"></img>
      </>
    );
  }
  const { status, statusText } = location.state;
  return (
    <>
      <h1>ERROR</h1>
      <p>{status}</p>
      <p>{statusText}</p>
      <img src="public/errorCat.jpg" alt="Puzzled Cat" className="responsive"></img>
    </>
  );
}

export default Error;