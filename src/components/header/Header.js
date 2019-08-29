import React from 'react';
import '../../App.css';
import NewNavBar from './NewNavBar';

const Header = (props) => {
  const { currentUser, setuser } = props;
  return (
    <>
      <NewNavBar currentUser={currentUser} setUser={setuser} />
    </>
  );
}


export default Header;