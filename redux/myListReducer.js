import * as ActionTypes from './ActionTypes';

export const myList = (state = { mySoundList: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_MY_LIST:
            return {...state, mySoundList: state.mySoundList.concat(action.payload) }
        
        default:
            return state;
    }
}