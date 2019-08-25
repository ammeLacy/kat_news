import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Link } from '@reach/router';


const ArticleListCard = (articleobj) => {
  const { article } = articleobj;
  return (
    <div className="p-3 bg-info my-2 rounded">
      <Toast>
        <ToastHeader>
          <Link to={'/articles/' + article.article_id}> {article.title}</Link>
        </ToastHeader>
        <ToastBody>
          Topic: {article.topic}
          <br />
          Author: {article.author}<br />
          Votes: {article.votes} <br />
          Number of Comments: {article.comment_count}
        </ToastBody>
      </Toast>
    </div>
  );
}

export default ArticleListCard;

