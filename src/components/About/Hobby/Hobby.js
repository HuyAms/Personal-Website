import classes from './Hobby.css';
import React from 'react';

const hobby = (props) => {
  console.log("VIDEO: ", props.hobbies.magic[0])
  return (
      <section className={classes.HobbyContent}>
        <div>
          <h2>Hobbies</h2>
          <p>{props.hobbies.description}</p>
        </div>
        <div className={classes.VideoContent}>
          <iframe width="266" height="150"
                  src={props.hobbies.magic[0]} frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <iframe width="266" height="150"
                  src={props.hobbies.magic[1]} frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <iframe width="266" height="150"
                  src={props.hobbies.magic[2]} frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </section>
  );
};

export default hobby;