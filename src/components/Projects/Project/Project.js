import React from 'react';
import classes from './Project.css';

const project = (props) => {
  let features = null;
  if (props.features) {
    features = props.features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))
  }

  let img = null;
  if (props.img !== "") {
    img = <img className={classes.ProjectImg} src={props.img} alt={props.name}/>
  }

  return (
        <section className={classes.ProjectsContent}>
          {img}
          <div className={classes.Project}>
            <h2>{props.name}</h2>
            <p className={classes.ProjectType}>{props.type}</p>
            <p>{props.description}</p>
            <ul>
              {features}
            </ul>
            <a className={classes.Button} target="_blank" rel="noopener" href={props.link}>Detail</a>
          </div>
        </section>
  )
}

export default project;