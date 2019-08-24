import React, { Component } from 'react';
import Header from '../header/Header';
import ArticleList from './ArticleList';

class Articles extends Component {
  state = {}
  render() {
    const { search } = this.props.location;
    return (<><Header />
      <ArticleList key={search} search={search} />
    </>);

  }
}

export default Articles;