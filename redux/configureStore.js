import {createStore, combineReducers} from 'redux';
import { myList } from './myListReducer';

export const ConfigureStore = () => {
    const myStore = createStore(
        combineReducers( {
            myList
        })
    );

    return myStore;
};