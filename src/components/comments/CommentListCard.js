import React, { Component } from 'react';
import { updateCommentVotes } from '../../utils/api';
import VoteUpdater from '../multiUseComponents/VoteUpdater';
import DeleteCommentButton from './DeleteCommentButton'
const dateFormat = require('dateformat');

class CommentListCard extends Component {

  state = {
    deleted: false
  }

  setDeleted = () => {
    this.setState({ deleted: true })
  }

  render() {
    const { comment_id, author, votes, body, created_at } = this.props.comment;
    if (this.state.deleted) {
      return (<></>);
    }
    return (
      <div className='commentContainer' >
        <div className="comment">
          <h2>author: {author}</h2>
          <p>{body}</p>
          <VoteUpdater
            updateVotes={updateCommentVotes}
            object_id={comment_id}
            votes={votes}
            author={author}
          />
          <DeleteCommentButton setDeleted={this.setDeleted} author={author} comment_id={comment_id} />
          <p>posted: {dateFormat(created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')} </p>
        </div>
      </div>
    );
  }
}

export default CommentListCard;