import React from 'react';

const Error = (props) => {
  const { state } = props.location;
  if (state === null) {
    const { status, statusText } = props.error
    return (
      <>
        <p>{status}</p>
        <p>{statusText}</p>
      </>
    )
  }

  const { status, statusText } = state;
  return (
    <>
      <h1>ERROR</h1>
      <p>{status}</p>
      <p>{statusText}</p>
    </>
  );
}

export default Error;