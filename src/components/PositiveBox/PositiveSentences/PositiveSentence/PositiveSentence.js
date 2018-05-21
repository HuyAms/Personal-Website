import React from 'react';
import classes from './PositiveSentence.css';

const positiveSentence = (props) => {
  return (
      <div className={classes.PositiveSentence}>
        <p className={classes.Sentence}>{props.positive}</p>
        <p className={classes.Name}>_{props.name}</p>
      </div>
  )
}

export default positiveSentence;
