import React from 'react';
import { Button } from 'reactstrap';
import { UserConsumer } from '../CurrentUserContext';
import { deleteArticleComment } from '../../utils/api';

const DeleteCommentButton = ({ setDeleted, author, comment_id }) => {
  return (
    <UserConsumer>
      {
        ({ user }) => {
          return (<>
            {(user !== null && user === author) &&
              <div className="commentButton" >
                <Button
                  color="secondary" id="deleteComment"
                  size="sm"
                  onClick={() => {
                    deleteArticleComment(comment_id);
                    setDeleted();
                  }
                  }>
                  Delete Comment</Button>
              </div>
            }
          </>
          )
        }
      }
    </UserConsumer>
  );
}

export default DeleteCommentButton;