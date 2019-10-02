import errorcat from '../../static/errorCat.jpg'
import React, { Component } from 'react';

class Error extends Component {
  state = { imageIsReady: false }

  componentDidMount() {
    const img = new Image();
    img.src = errorcat; // by setting an src, you trigger browser download

    img.onload = () => {
      // when it finishes loading, update the component state
      this.setState({ imageIsReady: true });
    }
  }

  render() {
    const { imageIsReady } = this.state;
    const { location } = this.props;

    if (!imageIsReady) {
      return null;
    } else {

      if (location === undefined || location.state === undefined) {
        return (
          <>
            <div className="error">
              <h1 id="errorText">ERROR</h1>
              <img src={errorcat} alt="Puzzled Cat"></img>
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
  }
}


export default Error;