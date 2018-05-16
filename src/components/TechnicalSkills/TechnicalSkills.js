import React from 'react';
import classes from './TechnicalSkills.css';
import Android from '../../assets/images/android.png';
import Css from '../../assets/images/css.png';
import Html from '../../assets/images/html.png';
import Ios from '../../assets/images/ios.png';
import Java from '../../assets/images/java.png';
import Javascript from '../../assets/images/javascript.png';
import Kotlin from '../../assets/images/kotlin.png';
import Nodejs from '../../assets/images/nodejs.png';
import Swift from '../../assets/images/swift.png';

const technicalSkills = () => {
  return (
      <section className={classes.TechnicalSkillsContent}>
        <h2>Technical Skills</h2>
        <div className={classes.TechnicalSkills}>
          <figure>
            <img src={Android} alt="Android"/>
            <p>Android</p>
          </figure>
          <figure>
            <img src={Ios} alt="iOS"/>
            <p>iOS</p>
          </figure>
          <figure>
            <img src={Nodejs} alt="NodeJS"/>
            <p>NodeJS</p>
          </figure>
          <figure>
            <img src={Html} alt="HTML"/>
            <p>HTML</p>
          </figure>
          <figure>
            <img src={Css} alt="Css"/>
            <p>CSS</p>
          </figure>
          <figure>
            <img src={Javascript} alt="JavaScript"/>
            <p>JavaScript</p>
          </figure>
          <figure>
            <img src={Java} alt="Java"/>
            <p>Java</p>
          </figure>

          <figure>
            <img src={Kotlin} alt="Kotlin"/>
            <p>Kotlin</p>
          </figure>

          <figure>
            <img src={Swift} alt="Swift"/>
            <p>Swift</p>
          </figure>
        </div>
      </section>
  );
};

export default technicalSkills;