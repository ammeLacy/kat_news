import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { deleteArticleComment } from '../../utils/api';


class CommentListCard extends Component {
  state = {
    hideDeleteButton: true
  };
  render() {
    const { comment } = this.props;
    const { comment_id, currentUser } = comment;


    if (currentUser !== null) {
      let style = false;
    }

    return (
      <div className='commentContainer' >
        <div className="comment">
          <h2>author: {comment.author}</h2>
          <p>{comment.body}</p>
          <h3>votes: {comment.votes}</h3>
          <h3>posted: {comment.created_at} </h3>
        </div>
        <div className="commentButton">
          <Button color="secondary" size="sm" onClick={() => deleteArticleComment(comment_id)}>
            Delete Comment</Button>
        </div>
      </div>
    );
  }
}

export default CommentListCard;