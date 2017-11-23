import {combineReducers} from 'redux';

export const valueReducer = (state = {value: 0}, action) => {
    console.log(action.amont);

    switch(action.type){
        case 'ADD_VLUE':
            return { ...state, value: state.value + 1};
        default:
            return state;
    }
}

export default combineReducers({
    value: valueReducer
});