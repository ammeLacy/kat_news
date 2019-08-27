import React from 'react';

const Error = (props) => {
  const { status, statusText } = props.location.state;
  console.log(status)
  return (<>
    <h1>ERROR</h1>
    <p>{status}</p>
    <p>{statusText}</p>
  </>);
}

export default Error;