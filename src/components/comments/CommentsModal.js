import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { postArticleComments } from '../../utils/api';
import { navigate } from '@reach/router';

class CommentsModal extends React.Component {
  state = {
    modal: false,
    newComment: '',
  };
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleChange = (text) => {
    this.setState({ newComment: text });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.props.article_id.article.article_id)
    const { articleId } = this.props;
    const { newComment } = this.state;
    const { currentUser } = this.props;
    console.log(currentUser)
    console.log(newComment)
    postArticleComments(newComment, currentUser, articleId).then((newlyPostComment) => {
      //this.props.addItem(newlyPostComment);
    }).catch(err =>
      console.dir(err))
    this.toggle();
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Write a Comment</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}>Write your comment</ModalHeader>
            <ModalBody>
              <textarea type="text" rows="4" cols="50" name="newComment" onChange={(e) => this.handleChange(e.target.value)} required></textarea>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Submit your comment</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default CommentsModal;