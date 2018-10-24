import React from 'react';
import classes from './Input.css';
import Fade from 'react-reveal/Fade';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  let inValid = props.invalid && props.shouldValidate && props.touched;
  if (inValid) {
    inputClasses.push(classes.Invalid);
  }

  if (props.elementType === 'textarea') {
    inputClasses.push(classes.TextArea);
  }

  let errorText = (
      <Fade bottom collapse when={inValid}>
        <div className={classes.InvalidAlert}>
          {props.errorMessage}
        </div>
      </Fade>
  )

  switch (props.elementType) {
    case ('input'):
      inputElement =
          <input className={inputClasses.join(' ')} {...props.elementConfig}
                 value={props.value} onChange={props.changed}/>;
      break;
    case ('textarea'):
      inputElement =
          <textarea className={inputClasses.join(' ')} {...props.elementConfig}
                    value={props.value} onChange={props.changed}/>;
      break;
    default:
      inputElement =
          <input className={inputClasses.join(' ')} {...props.elementConfig}
                 value={props.value} onChange={props.changed}/>;
  }
  return (
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        {errorText}
      </div>
  );
};

export default input;
