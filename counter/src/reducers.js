import * as actions from './actions';
import {combineReducers} from 'redux';

const counter = (state={}, action) => {
    switch(action.type) {
        case actions.INCREMENT:
            let newState = {...state};
            newState[action.id].count += 1;
            return newState;

        case actions.DECREMENT:
            newState = {...state};
            newState[action.id].count -= 1;
            return newState;

        case actions.ADD_COUNTER:
            newState = {...state};
            newState[action.id] = {id: action.id, count: action.count }
            return newState;
        
        case actions.REMOVE_COUNTER:
            newState = {...state};
            delete newState[action.id];
            return newState;

        default:
            return state;
    }
}

export default combineReducers({
    counter
})