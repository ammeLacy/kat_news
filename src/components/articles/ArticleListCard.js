import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Link } from '@reach/router';


const ArticleListCard = (articleobj) => {
  const { article_id, title, topic, author, votes, comment_count, created_at } = articleobj.article;
  return (
    <div className="p-3 bg-info my-2 rounded">
      <Toast>
        <ToastHeader>
          <Link to={`/articles/${article_id}`}> {title}</Link>
        </ToastHeader>
        <ToastBody>
          Topic: {topic}
          <br />
          Author: {author}<br />
          Votes: {votes} <br />
          Posted: {created_at}<br />
          Number of Comments: {comment_count}
        </ToastBody>
      </Toast>
    </div>
  );
}

export default ArticleListCard;

