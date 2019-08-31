import React from 'react';
import CommentListCard from './CommentListCard';

const CommentList = ({ comments, currentUser }) => {
  return (<ul className="grid-comments">
    {
      comments.map(comment => {
        return <CommentListCard
          key={comment.comment_id}
          comment={comment}
          currentUser={currentUser}
        />
      })
    }
  </ul>);
}

export default CommentList;

