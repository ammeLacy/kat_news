import React from 'react';

const UserContext = React.createContext();

const UserReducer = (state, user) => {
  return { ...state, user };
};

export class UserProvider extends React.Component {
  state = {
    user: null,
    changeUser: user => {
      this.setState(state => UserReducer(state, user));
    }
  };

  render() {
    const { state, props: { children } } = this;
    return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
  }
}

export const UserConsumer = UserContext.Consumer;