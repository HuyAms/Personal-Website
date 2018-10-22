import {createSelector} from 'reselect';

const getProjects = (state) => state.projectReducer.get('projects');
const getProjectsFilter = (state) => state.projectReducer.get('activeFilterIndex');
const getProjectSearch = (state) => state.projectReducer.get('search');

const isSearched = (project, search) => {
  return project.name.toLowerCase().includes(search.toLowerCase())
}

export const getVisibleProjects = createSelector(
    [getProjects, getProjectsFilter, getProjectSearch],
    (projects, filter, search) => {
      switch (filter) {
        case 0:
          return projects.filter(project => isSearched(project, search));
        case 1:
          return projects.filter(project => project.type === 'iOS' && isSearched(project, search));
        case 2:
          return projects.filter(project => project.type === 'Android' && isSearched(project, search));
        case 3:
          return projects.filter(project => project.type === 'NodeJS' && isSearched(project, search));
        case 4:
          return projects.filter(project => project.type === 'ReactJS' && isSearched(project, search));
        case 5:
          return projects.filter(project => project.type === 'Ionic' && isSearched(project, search));
        case 6:
          return projects.filter(project => project.type === 'Web-app' && isSearched(project, search));
        default:
          return projects
      }
    },
);

