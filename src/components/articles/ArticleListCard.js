import React from 'react';
import { Link } from '@reach/router';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
const dateFormat = require('dateformat');

const ArticleListCard = ({ article }) => {
  const { article_id, title, topic, author, votes, comment_count, created_at, avatar_url } = article;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle> <Link to={`/articles/${article_id}`}> {title}</Link></CardTitle>
          <CardSubtitle>Topic: {topic}</CardSubtitle>
          <dl>
            <dt>Author {author}</dt>
            <dt>Votes {votes}</dt>
            <dt>Posted: {dateFormat(created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</dt>
            <dt>Number of Comments: {comment_count}</dt>
          </dl>
          <CardImg src={avatar_url} alt="Card image cap" />
        </CardBody>
      </Card>
    </div>
  );
};



export default ArticleListCard;

