import React from 'react';
import ArticleList from './ArticleList';

const Articles = ({ location }) => {
  const { search } = location;
  return (
    <ArticleList key={search} search={search} />
  );
}

export default Articles;