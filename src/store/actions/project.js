import * as actionTypes from './actionTypes';

export const fetchProjectsSuccess = (projects) => {
    return {
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        projects
    }
}

export const fetchProjectsFail = (error) => {
    return {
        type: actionTypes.FETCH_PROJECT_FAIL,
        error
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
        filter
    }
}

export const setProjectSearch = (search) => {
    return {
        type: actionTypes.SET_PROJECT_SERACH,
        search
    }
}
