import React, { Component } from 'react';
import { getArticles } from '../../utils/api';
import ArticleListCard from './ArticleListCard';
import { navigate } from '@reach/router';
const queryString = require('query-string');


class ArticleList extends Component {

  state = {
    articles: null,
    isLoading: true,
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.search);
    getArticles(queryParams)
      .then((articles) => {
        this.setState({ articles, isLoading: false })
      })
      .catch((error) => {
        const { status, statusText } = error.response;
        navigate('/error', { state: { status, statusText } });
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
      <dl>
        {
          articles.map(article => {
            return <ArticleListCard key={article.article_id} article={article} />
          })
        }
      </dl>);
  }
}

export default ArticleList;