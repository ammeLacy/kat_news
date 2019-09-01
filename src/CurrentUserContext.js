import React from 'react';

const CommentsContext = React.createContext();

const addCommentReducer = (state, comment) => {
  return { ...state, comments: [comment].concat(state.comments) };
};

export class CommentsProvider extends React.Component {
  state = {
    comments: [],
    addComment: comment => {
      this.setState(state => addCommentReducer(state, comment));
    }
  };

  render() {
    const { state, props: { children } } = this;
    return <CommentsContext.Provider value={state}>{children}</CommentsContext.Provider>;
  }
  componentDidMount() {
    this.setState({ comments: this.props.value });
  }
}

export const CommentsConsumer = CommentsContext.Consumer;