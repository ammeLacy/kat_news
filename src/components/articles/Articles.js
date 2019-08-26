import React, { Component } from 'react';
import ArticleList from './ArticleList';

class Articles extends Component {
  state = {}
  render() {
    const { search } = this.props.location;
    return (
      <ArticleList key={search} search={search} />
    );

  }
}

export default Articles;