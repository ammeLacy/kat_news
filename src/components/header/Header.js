import React from 'react';
import '../../App.css';
import NavBar from './NavBar';

const Header = (props) => {
  return (
    <>
      <header className="App">Kat-News</header>
      <NavBar currentUser={props.currentUser} setuser={props.setuser} />
    </>
  );
}


export default Header;