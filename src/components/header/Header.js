import React from 'react';
import '../../App.css';
import NavBar from './NavBar';

const Header = (props) => {
  const { currentUser, setuser } = props;
  return (
    <>
      <header className="App">Kat-News</header>
      <NavBar currentUser={currentUser} setuser={setuser} />
    </>
  );
}


export default Header;