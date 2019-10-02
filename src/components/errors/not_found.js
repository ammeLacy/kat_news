import React, { Component } from 'react';
import errorcat from '../../static/errorCat.jpg'

class NotFound extends Component {
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

    if (!imageIsReady) {
      return null;
    } else {
      return (
        <>
          <div className="error">
            <h1>ERROR</h1>
            <p>404</p>
            <p>Not found</p>
            <img src={errorcat} alt="Puzzled Cat" className="responsive"></img>
          </div>
        </>
      );
    }
  }
}

export default NotFound;