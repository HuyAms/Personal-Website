import React from 'react';
import classes from './SocialItems.css';

const socialItems = () => {
  return (
      <ul className={classes.SocialItems}>
        <li className={classes.LinkedIn}><a href="https://www.linkedin.com/in/huy-trinh-dinh-253534131/" target="_blank" rel="noopener"><i className="ion-logo-linkedin"></i></a></li>
        <li className={classes.Github}><a href="https://github.com/HuyAms" target="_blank" rel="noopener"><i className="ion-logo-github"></i></a></li>
      </ul>
  )
}

export default socialItems;