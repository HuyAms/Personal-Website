import React from 'react';
import classes from './Contact.css';
import Button from '../UI/ButtonLink/ButtonLink';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const contact = (props) => {
  return (
      <section  className={classes.ContactContent}>
        <Fade delay={200} top>
        <div className={classes.ContactInfo}>
          <h1>Contact</h1>
          <p><span>Address:</span> Kilonrinne 10F 140, 02610, Espoo, Finland</p>
          <p><span>Email:</span> dinhhuyams@gmail.com</p>
          <p><span>LinkedIn:</span>
            <a href="https://www.linkedin.com/in/huy-trinh-dinh-253534131/"
               target="_blank" rel="noopener noreferrer"> Huy Trinh Dinh</a>
          </p>
        </div>
        </Fade>
        <Zoom delay={1000}>
        <iframe
            title="map"
            className={classes.Map}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBj8I0ktP0lHiUHftiJwgkf3D6DvjWJJ5g
    &q=Kilonrinne+10" allowFullScreen>
        </iframe>
        </Zoom>
        <Fade delay={200} bottom>
        <Button link="mailto:dinhhuyams@gmail.com" target="_top">Contact Me</Button>
        </Fade>
      </section>
  );
};

export default contact;