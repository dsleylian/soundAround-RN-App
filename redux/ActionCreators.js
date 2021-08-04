import * as ActionTypes from './ActionTypes';

export const addSoundToList = soundToAdd => ({
    type: ActionTypes.ADD_TO_MY_LIST,
    payload: soundToAdd
});