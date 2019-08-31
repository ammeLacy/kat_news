import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Link } from '@reach/router';
const dateFormat = require('dateformat');

const ArticleListCard = ({ article }) => {
  const { article_id, title, topic, author, votes, comment_count, created_at } = article;
  return (
    <div className="p-3 bg-info my-2 rounded">
      <Toast>
        <ToastHeader>
          <Link to={`/articles/${article_id}`}> {title}</Link>
        </ToastHeader>
        <ToastBody>
          <dl>
            <dt>Topic: {topic}</dt>
            <dt>Author: {author}</dt>
            <dt>Votes: {votes}</dt>
            <dt>Posted: {dateFormat(created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</dt>
            <dt>Number of Comments: {comment_count}</dt>
          </dl>
        </ToastBody>
      </Toast>
    </div>
  );
}



export default ArticleListCard;

