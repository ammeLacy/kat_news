import React from 'react';


const ArticleCard = (props) => {
  //console.log(props.article)
  const { author, body, comment_count, title, topic, votes } = props.article;
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
    </article >
  );
};

export default ArticleCard;