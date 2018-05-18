import React from 'react';
import classes from './Button.css';

const button = (props) => {
  return (
        <a className={classes.Button} target={props.target} rel="noopener" href={props.link}>{props.children}</a>
  )
}


export default button;