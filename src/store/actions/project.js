import * as actionTypes from './actionTypes';
import axios from '../../axious';

export const fetchProjectsSuccess = (projects) => {
    return {
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        projects: projects
    }
}

export const fetchProjectsFail = (error) => {
    return {
        type: actionTypes.FETCH_PROJECT_FAIL,
        error: error
    }
}

export const fetchProjectsStart = () => {
    return {
        type: actionTypes.FETCH_PROJECTS_START
    }
}

export const setProjectFilter = (filter) => {
    return {
        type: actionTypes.SET_PROJECT_FILTER,
        filter: filter
    }
}

export const setProjectSearch = (search) => {
    return {
        type: actionTypes.SET_PROJECT_SERACH,
        search: search
    }
}

export const fetchProject = () => {
    return dispatch => {
        dispatch(fetchProjectsStart());
        axios.get('/projects.json')
            .then(res => {
                const fetchedProject = [];
                for (let key in res.data) {
                    fetchedProject.push({
                        ...res.data[key],
                        id: key,
                    });
                }
                dispatch(fetchProjectsSuccess(fetchedProject))
            })
            .catch(error => {
                dispatch(fetchProjectsFail(error))
            })
    }
}
