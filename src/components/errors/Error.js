import React from 'react';

const Error = ({ location }) => {
  if (location === undefined || location.state === undefined) {
    return (
      <>
        <h1>ERROR</h1>
        <p></p>
      </>
    );
  }
  const { status, statusText } = location.state;
  return (
    <>
      <h1>ERROR</h1>
      <p>{status}</p>
      <p>{statusText}</p>
    </>
  );
}

export default Error;