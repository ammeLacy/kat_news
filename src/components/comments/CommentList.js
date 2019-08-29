import React from 'react';
import CommentListCard from './CommentListCard';

const CommentList = (props) => {
  const { comments, currentUser } = props;
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

