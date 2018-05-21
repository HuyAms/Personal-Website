import React from 'react';
import classes from './ButtonLink.css';

const buttonLink = (props) => {
  return (
        <a className={classes.Button} target={props.target} rel="noopener" href={props.link}>{props.children}</a>
  )
}


export default buttonLink;