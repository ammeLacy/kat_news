import React from 'react';
import CommentsModal from '../comments/CommentsModal';
import VoteUpdater from '../multiUseComponents/VoteUpdater';
import { updateArticleVotes } from '../../utils/api';



const ArticleCard = ({ currentUser, article }) => {
  const { article_id, author, body, comment_count, title, topic, votes } = article;
  return (
    <article className="grid-article">
      <div>
        <h1>{title}</h1>
        <h2>{topic}</h2>
      </div>
      <hr></hr>
      <h3>Author: {author}</h3>
      <p>{body}</p>
      <h4>Comments: {comment_count}</h4>
      <VoteUpdater
        updateVotes={updateArticleVotes}
        object_id={article_id}
        votes={votes}
        currentUser={currentUser}
        author={author}
      />
      {(currentUser !== null) &&
        <CommentsModal
          articleId={article_id}
          currentUser={currentUser}
        />
      }
    </article >
  );
};

export default ArticleCard;