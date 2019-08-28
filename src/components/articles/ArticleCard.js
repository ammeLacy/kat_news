import React from 'react';
import CommentsModal from '../comments/CommentsModal';
import VoteUpdater from '../multiUseComponents/VoteUpdater';
import { updateArticleVotes } from '../../utils/api';



const ArticleCard = (props) => {
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
      <VoteUpdater updateVotes={updateArticleVotes} object_id={article_id} votes={votes} currentUser={props.currentUser} author={author} />
      {(props.currentUser !== null) &&
        <CommentsModal show={props.show} articleId={article_id} currentUser={props.currentUser} />
      }
    </article >
  );
};

export default ArticleCard;