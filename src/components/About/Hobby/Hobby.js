import classes from './Hobby.css';
import React from 'react';
import Reveal from 'react-reveal/Reveal';

const hobby = (props) => {
  return (
      <section className={classes.HobbyContent}>
          <div>
            <h2>Hobbies</h2>
            <p>{props.hobbies.description}</p>
          </div>
        <Reveal effect="fadeInUp">
          <div className={classes.VideoContent}>
            <Reveal effect="pulse" delay={1600} count={2}>
              <iframe width="266" height="150"
                      title="video1"
                      src={props.hobbies.magic[0]} frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen></iframe>
            </Reveal>
            <iframe width="266" height="150"
                    title="video2"
                    src={props.hobbies.magic[1]} frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <iframe width="266" height="150"
                    title="video3"
                    src={props.hobbies.magic[2]} frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </Reveal>
      </section>
);
};

export default hobby;