import React from 'react';
import { Button } from 'reactstrap';

const DefaultUserButton = (props) => {
  return (
    <div>
      <Button color="secondary" onClick={() => handleClick(props.setuser)}>
        Log in as Jess Jelly </Button>
    </div>
  );
}

const handleClick = (setuser) => {
  setuser('jessjelly');
}

export default DefaultUserButton;

//onClick = {() => this.handleClick('created_at')}> Date posted</DropdownItem >