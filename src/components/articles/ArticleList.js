import React, { Component } from 'react';
import { getArticles } from '../../utils/api';
import ArticleListCard from './ArticleListCard';
import { navigate } from '@reach/router';
import LoadingSpinner from '../multiUseComponents/LoadingSpinner';
const queryString = require('query-string');


class ArticleList extends Component {

  state = {
    articles: null,
    isLoading: true,
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    const queryParams = queryString.parse(this.props.search);
    getArticles(queryParams)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((error) => {
        if (error.response === undefined) {
          navigate('/error', { state: { status: 500, statusText: error }, replace: true });
        } else {
          const { status, statusText } = error.response;
          navigate('/error', { state: { status, statusText }, replace: true });
        }
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props;
    if (search !== prevProps.search) {
      this.fetchArticles()
    }
  };

  render() {
    const { isLoading, articles } = this.state
    if (isLoading) {
      return (
        <LoadingSpinner />
      )
    }
    return (
      <dl className="grid-articles">
        {
          articles.map(article => {
            return <ArticleListCard key={article.article_id} article={article} />
          })
        }
      </dl>);
  }
}

export default ArticleList;