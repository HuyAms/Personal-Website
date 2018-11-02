import React from 'react';
import classes from './Project.css';
import Button from '../../UI/ButtonLink/ButtonLink';

const project = (props) => {
  let features = null;
  if (props.features) {
    features = props.features.map((feature, index) => (
      <li key={feature}>{feature}</li>
    ))
  }

  let img = null;
  if (props.img !== "") {
    img = <img className={classes.ProjectImg} src={props.img} alt={props.name}/>
  }

  return (
        <section className={classes.ProjectsContent}>
          <a href={props.link} target="_blank">
            {img}
          </a>
          <div className={classes.Project}>
            <h2>{props.name}</h2>
            <p className={classes.ProjectType}>{props.type}</p>
            <p>{props.description}</p>
            <ul>
              {features}
            </ul>
            <div className={classes.Button}>
              <Button link={props.link} target="_blank">Detail</Button>
            </div>
          </div>
        </section>
  )
}

export default project;
