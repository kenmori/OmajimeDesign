import { createAction } from 'redux-actions';



export const increment = createAction('increment');
export const decrement = (value) => {
    return {
        type:'decrement',
        value: value - 1
    }
}
