import React, { Component } from 'react';
import { getArticle } from '../../utils/api';


class Article extends Component {
  state = {
    article: null,
    isLoading: true
  };
  componentDidMount() {
    this.getArticle();
  }

  // componentDidMount() {
  //   this.getStudent();
  // }
  render() {
    return (<></>);
  }
}

export default Article;


