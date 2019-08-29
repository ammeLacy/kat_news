import React from 'react';
import ArticleList from './ArticleList';

const Articles = (props) => {
  const { search } = props.location;
  return (
    <ArticleList key={search} search={search} />
  );
}

export default Articles;