import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/Navigation';

const navigationItems = () => {
  return (
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/" exact>Home</NavigationItem>
          <NavigationItem link="/about">About</NavigationItem>
          <NavigationItem link="/projects">Projects</NavigationItem>
          <NavigationItem link="/contact">Contact</NavigationItem>
        </ul>
  )
}

export default navigationItems;