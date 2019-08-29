import React from 'react';
import '../../App.css';
import NavBar from './NavBar';
import NewNavBar from './NewNavBar';

const Header = (props) => {
  const { currentUser, setuser } = props;
  return (
    <>
      <header className="App">Kat-News</header>
      <NavBar currentUser={currentUser} setuser={setuser} />
      <NewNavBar currentUser={currentUser} setUser={setuser} />
    </>
  );
}


export default Header;