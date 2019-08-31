import React from 'react';
import ArticleList from './ArticleList';

const Articles = (search) => {
  return (
    <ArticleList key={search} search={search} />
  );
}

export default Articles;