import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from "./constants";




const inintialStateSearch = {
    searchField: ""
}

export const searchRobot = (state = inintialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}


const inintialStateRobot = {
    isPending: false,
    robot: [],
    error: ""
}


export const robotRequest = (state = inintialStateRobot, action = {}) => {

    switch (action.type) {
        case REQUEST_ROBOT_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOT_SUCCESS:
            return Object.assign({}, state, { robot: action.payload, isPending: false })
        case REQUEST_ROBOT_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}