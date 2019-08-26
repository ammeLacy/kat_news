import { Router } from '@reach/router';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/home/Home';
import Articles from './components/articles/Articles';
import Article from './components/articles/Article';
import Header from './components/header/Header';

class App extends Component {
  state = { currentUser: null }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} setuser={this.setUser} />
        <Router>
          <Home path="/" />
          <Articles path="/articles" />
          <Article path="/articles/:id" currentUser={this.state.currentUser} />
        </Router>
      </div>
    );
  }
  setUser = (username) => {
    this.setState({ currentUser: username });
  }
}

export default App;
