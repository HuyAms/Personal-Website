import React from 'react';
import classes from './Profile.css';
import profileImg from '../../assets/images/huy.png';
import Fade from 'react-reveal/Fade';

const profile = (props) => {
  return (
      <section className={classes.ProfileContent}>
        <Fade duration={1000} delay={200} top>
          <div className={classes.Profile}>
            <h1>Huy Trinh</h1>
            <h2>{props.myInfo.title}</h2>
            <p>{props.myInfo.description}</p>
            <a target="_blank" rel="noopener" href={props.myInfo.cv}>Download My CV</a>
          </div>
        </Fade>
        <img className={classes.ProfileImage} src={profileImg}
             alt="huytrinh"/>
      </section>
  );
};

export default profile;
