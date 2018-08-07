import todo from './todo';
import {combineReducers} from 'redux';
import filter from './filter'
export default combineReducers({todo, filter});