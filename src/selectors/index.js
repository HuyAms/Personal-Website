import {createSelector} from 'reselect';

const getProjects = (state) => state.projectReducer.projects;
const getProjectsFilter = (state) => state.projectReducer.activeFilterIndex;

export const getVisibleProjects = createSelector(
    [getProjects, getProjectsFilter],
    (projects, filter) => {
      switch (filter) {
        case 0:
          return projects;
        case 1:
          return projects.filter(project => project.type === 'iOS');
        case 2:
          return projects.filter(project => project.type === 'Android');
        case 3:
          return projects.filter(project => project.type === 'NodeJS');
        case 4:
          return projects.filter(project => project.type === 'ReactJS');
        case 5:
          return projects.filter(project => project.type === 'Ionic');
        case 6:
          return projects.filter(project => project.type === 'Web-app');
      }
    },
);

