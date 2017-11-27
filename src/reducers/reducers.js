import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
export const valueReducer = (state = {value: 0}, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_VLUE':
            return { ...state, value: state.value + 3};
        default:
            return state;
    }
}

export default combineReducers({
    value: valueReducer,
    form: formReducer
});