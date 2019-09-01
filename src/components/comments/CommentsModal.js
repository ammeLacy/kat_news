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
    const { articleId, currentUser } = this.props;
    const { newComment } = this.state;
    postArticleComments(newComment, currentUser, articleId)
      .then(() => { })
      .catch(error => {
        const { status, statusText } = error.response;
        navigate('/error', { state: { status, statusText }, replace: true });
      })
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Write a Comment</Button>
        <Modal autoFocus={false} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle} id="commentModal">Write your comment</ModalHeader>
            <ModalBody>
              <textarea
                autoFocus
                type="text" rows="4" cols="50" name="newComment" maxLength={255} required
                onChange={(e) => this.handleChange(e.target.value)} >
              </textarea>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Submit your comment</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default CommentsModal;