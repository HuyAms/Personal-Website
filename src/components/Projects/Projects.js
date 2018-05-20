import React from 'react';
import classes from './Projects.css';
import Project from '../../components/Projects/Project/Project';
import Slide from 'react-reveal/Slide';

const projects = (props) => {

  const projects =
      props.projects.map(project =>
          (
              <Project
                  key={project.id}
                  img={project.imgPath}
                  name={project.name}
                  description={project.description}
                  features={project.features}
                  link={project.link}
                  type={project.type}
              />
          ));

  return (
      <Slide right delay={200} duration={2000}>
        <div className={classes.ProjectsContent}>
          {projects}
        </div>
      </Slide>
  );
};

export default projects;