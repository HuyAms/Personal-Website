import React from 'react';
import classes from './Projects.css';
import Project from '../../components/Projects/Project/Project';

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
      <div className={classes.ProjectsContent}>
        {projects}
      </div>
  );
};

export default projects;