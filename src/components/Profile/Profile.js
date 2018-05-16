import React from 'react';
import classes from './Profile.css';
import profileImg from '../../assets/images/huy.png';

const profile = () => {
  return (
      <section className={classes.ProfileContent}>
        <div className={classes.Profile}>
          <h1>Huy Trinh</h1>
          <h2>Mobile developer</h2>
          <p>A young developer who is curious about the world</p>
        </div>
        <img className={classes.ProfileImage} src={profileImg} alt="huytrinh"/>
      </section>
  )
}

export default profile;