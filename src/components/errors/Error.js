import React from 'react';

const Error = (props) => {

  if (props.location.state === null) {
    const { status, statusText } = props.error
    return (<>
      <p>{status}</p>
      <p>{statusText}</p>
    </>
    )
  }

  const { status, statusText } = props.location.state;
  console.log(status)
  return (<>
    <h1>ERROR</h1>
    <p>{status}</p>
    <p>{statusText}</p>
  </>);
}

export default Error;