import React, { Component } from 'react';

class CommentListCard extends Component {
  state = {}
  render() {
    console.log(this.props)
    const { comment } = this.props;
    return (<dt>
      <div className="comment">
        <h2>author: {comment.author}</h2>
        <p>{comment.body}</p>
        <h3>votes: {comment.votes}</h3>
        <h3>posted: {comment.created_at} </h3>
      </div>
    </dt>
    );
  }
}

export default CommentListCard;