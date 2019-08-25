import React, { Component } from 'react';
import { getArticle, getArticleComments } from '../../utils/api';
import Header from '../header/Header';
import ArticleCard from './ArticleCard';
import CommentList from '../comments/CommentList';



class Article extends Component {
  state = {
    article: null,
    comments: null,
    isLoading: true
  };

  componentDidMount() {
    const articlePromise = getArticle(this.props.id);
    const commentsPromise = getArticleComments(this.props.id);
    Promise.all([articlePromise, commentsPromise])
      .then((results) => {
        this.setState({ article: results[0], comments: results[1], isLoading: false })
      })

  }

  render() {
    const { isLoading, article, comments } = this.state
    if (isLoading) {
      return (<>Loading</>);
    }
    return (
      <>
        <Header />
        <div className="grid-container">
          <ArticleCard article={article} />
          <CommentList comments={comments} />
          {/* <div className="grid-articles">2</div> */}
        </div>

      </>
    )
  }
}

export default Article;


