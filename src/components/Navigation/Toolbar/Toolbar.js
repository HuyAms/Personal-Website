import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
      <nav className={classes.Nav}>
        <NavigationItems/>
      </nav>
  )
}

export default toolbar;