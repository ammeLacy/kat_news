import { Router } from '@reach/router';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/home/Home';
import Articles from './components/articles/Articles';
import Article from './components/articles/Article';
import Header from './components/header/Header';
import Error from './components/errors/Error';
import NotFound from './components/errors/not_found';
import { UserProvider } from './components/CurrentUserContext'

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div>
          <Header />
          <Router>
            <Home path="/" />
            <Articles path="/articles" />
            <Article path="/articles/:id" />
            <Error path="/error" />
            <NotFound path="/*" default />
          </Router>
        </div>
      </UserProvider>
    );
  }
}

export default App;
