import {universityAPI} from "../api/api";

const SET_UNIVERSITY = "SET_UNIVERSITY"
const DELETE_UNIVERSITY = "DELETE_UNIVERSITY"

let initialState = {

};

const universityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNIVERSITY:
            return {...state, university: action.university}
        case DELETE_UNIVERSITY:
            return {...state,university: []}
        default:
            return state;
    }
}

export const setUniversity = (university) => ({type: SET_UNIVERSITY, university})
export const deleteUniversity = (university) => ({type: SET_UNIVERSITY, university})

export const requestUniversity = (country) => {
    return (dispatch) => {
        universityAPI.getUniversity(country).then(data => {
            dispatch(setUniversity(data));

        });
    }
}

export const deleteU = () => {
    return (dispatch) => {
            dispatch(deleteUniversity());
    }
}


export default universityReducer;