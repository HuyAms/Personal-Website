import React from 'react';
import classes from './Profile.css';
import profileImg from '../../assets/images/huy.png';

const profile = (props) => {
  return (
      <section className={classes.ProfileContent}>
        <div className={classes.Profile}>
          <h1>Huy Trinh</h1>
          <h2>{props.myInfo.title}</h2>
          <p>{props.myInfo.description}</p>
        </div>
        <img className={classes.ProfileImage} src={profileImg} alt="huytrinh"/>
      </section>
  )
}

export default profile;