import React from 'react';
import CommentListCard from './CommentListCard';

const CommentList = (props) => {
  const { comments } = props;
  console.log(comments)
  return (<ul>
    {
      comments.map(comment => {
        return <CommentListCard
          key={comment.comment_id} comment={comment} />
      })
    }
  </ul>);
}

export default CommentList;

// return (
//   <ul>
//     {
//       articles.map(article => {
//         return <ArticleListCard key={article.article_id} article={article} />
//       })
//     }

//   </ul>);