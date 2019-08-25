import React from 'react';


const ArticleCard = (props) => {
  const { author, body, comment_count, title, topic, votes } = props.article;
  return (
    <article className="grid-article">
      <div>{title}
        {topic}
      </div>
      <hr></hr>
      <p>Author: {author}</p>
      <p>{body}</p>
      <p>Number of comments: {comment_count}</p>
      <p>Vote: {votes}</p>
    </article >
  );
};

export default ArticleCard;