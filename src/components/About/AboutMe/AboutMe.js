import classes from './AboutMe.css';
import React from 'react';

const aboutme = (props) => {
  return (
      <section className={classes.AboutContent}>
        <div className={classes.About}>
          <h1>About</h1>
          <p>{props.about}</p>
        </div>
        <div className={classes.Education}>
          <h2>Education</h2>
          <div>
            <h3>2016 – Present</h3>
            <p><strong>Metropolia University of Applied Sciences</strong></p>
            <p>Major: Information technology (Mobile solution)</p>
          </div>
          <div>
            <h3>2012 – 2015</h3>
            <p><strong>Hanoi - Amsterdam High school for the Gifted</strong></p>
            <p>Major: Physics</p>
          </div>
        </div>
          <div className={classes.Languages}>
          <h2>Languages</h2>
          <div>
            <h3>Vietnamese</h3>
            <p>Mother tongue</p>
          </div>
          <div>
            <h3>English</h3>
            <p>Professional working proficiency</p>
          </div>
          <div>
            <h3>Finnish</h3>
            <p>Elementary proficiency</p>
          </div>
        </div>
      </section>
  );
};

export default aboutme;