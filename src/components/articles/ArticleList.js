import React, { Component } from 'react';
import { getArticles } from '../../utils/api';
import ArticleCard from './ArticleCard';
const queryString = require('query-string');

class ArticleList extends Component {
  state = {
    articles: null,
    isLoading: true,
  }
  componentDidMount() {
    const queryParams = queryString.parse(this.props.search);
    getArticles(queryParams).then((articles) => {
      this.setState({ articles, isLoading: false })
    })
  }
  render() {
    const { isLoading, articles } = this.state
    if (isLoading) {
      return (
        <p>Loading</p>
      )
    }
    return (
      <ul>
        {
          articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />
          })
        }

      </ul>);


  }
}

export default ArticleList;