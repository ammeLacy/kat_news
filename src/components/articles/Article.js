import React, { Component } from 'react';
import { getArticle, getArticleComments } from '../../utils/api';
import ArticleCard from './ArticleCard';
import CommentList from '../comments/CommentList';
import { navigate } from '@reach/router';
import ArticleList from './ArticleList';


class Article extends Component {
  state = {
    article: null,
    comments: null,
    isLoading: true,
    show: false,
  };

  componentDidMount() {
    this.loadData();
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  forceReRender = () => {
    this.loadData();
  }

  loadData() {
    const { id } = this.props;
    const articlePromise = getArticle(id);
    const commentsPromise = getArticleComments(id);
    Promise.all([articlePromise, commentsPromise])
      .then((results) => {
        this.setState({
          article: results[0],
          comments: results[1],
          isLoading: false
        });
      }).catch((error => {
        const { status, statusText } = error.response;
        navigate('/error', { state: { status, statusText }, replace: true });
      }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.loadData();
    }
  }

  render() {
    const { isLoading, article, comments } = this.state
    if (isLoading) {
      return (<>Loading</>);
    }
    return (
      <>
        <div className="grid-container">
          <ArticleCard article={article} forceReRender={this.forceReRender} />
          <CommentList comments={comments} />
          <ArticleList />
        </div>
      </>
    )
  }
}
export default Article;


