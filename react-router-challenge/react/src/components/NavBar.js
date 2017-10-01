import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div>
      <BackButton />
      <Link to='/'>Home</Link>
      &nbsp; | &nbsp;
      <Link to='/resume'>Resume</Link>
      &nbsp; | &nbsp;
      <Link to='/projects'>Projects</Link>
      {props.children}
    </div>
  )
}

export default NavBar;
