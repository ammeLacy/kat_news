import { Router } from '@reach/router';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/home/Home';
import Articles from './components/articles/Articles';
import Article from './components/articles/Article';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <Article path="/articles/:id" />
      </Router>);
  }
}

/* <Articles path="/articles" />
  <Topics path="/topics" /> */

export default App;
