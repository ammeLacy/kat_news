import React from 'react';
import CommentsModal from '../comments/CommentsModal';



const ArticleCard = (props) => {
  //console.log(props.article)
  console.log(props)
  const { article_id, author, body, comment_count, title, topic, votes } = props.article;
  return (
    <article className="grid-article">
      <div><h1>{title}</h1>
        <h2>{topic}</h2>
      </div>
      <hr></hr>
      <h3>Author: {author}</h3>
      <p>{body}</p>
      <h4>Comments: {comment_count}</h4>
      <h4>Votes: {votes}</h4>
      <CommentsModal show={props.show} articleId={article_id} currentUser={props.currentUser} />
    </article >
  );
};

export default ArticleCard;