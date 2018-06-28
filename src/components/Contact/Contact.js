import React from 'react';
import classes from './Contact.css';
import Button from '../UI/ButtonLink/ButtonLink';

const contact = (props) => {
  return (
      <section  className={classes.ContactContent}>
        <div className={classes.ContactInfo}>
          <h1>Contact</h1>
          <p><span>Address: </span>{props.myInfo.address.address}</p>
          <p><span>Email:</span> {props.myInfo.mail}</p>
          <p><span>LinkedIn:</span>
            <a href={props.myInfo.linkedIn}
               target="_blank" rel="noopener noreferrer"> Huy Trinh Dinh</a>
          </p>
        </div>
        <iframe
            title="map"
            className={classes.Map}
            frameBorder="0"
            src={props.myInfo.address.mapLink} allowFullScreen>
        </iframe>
        <Button link={"mailto:" + props.myInfo.mail} target="_top">Contact Me</Button>
      </section>
  );
};

export default contact;