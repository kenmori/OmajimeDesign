import {handleActions} from 'redux-actions'
import {update} from 'immutability-helper'
import {ON_SELECTED,onSelectedSlot, SUCCESS_ALLINTERVIEWFRAME, SUCCESS_INTERVIEWFRAME, REQUEST_INTERVIEWFRAME, MOVE_INTERVIEWFRAME, REQUEST_INIT} from '../actions/interviewFrameAction'

const initialValues = {
  events : [{
    id: 1,
    title: 'long eventfafa',
    start:  new Date(2018, 3, 15),
      end: new Date(2018, 3, 15),
    isCreate: true
  }],
  selectedObjet: {},
  isSelected: false
}
export const interviewFrameReducer = handleActions({
    [ON_SELECTED]: (state, action) => {
        return {
            ...state,
        selectedObjet: action.payload.selectedObjet,
        isSelected: true
        }
    },
    [REQUEST_INTERVIEWFRAME]: (state, action) => ({
        ...state,
    }),
    [MOVE_INTERVIEWFRAME]: (state, action) => {
       return {
           ...state,
           events: action.payload.events,
           isCreate: false
        }
    },
    [SUCCESS_INTERVIEWFRAME]: (state, action) => {
        console.log(action, "reducer successinterview")
        let re = state.events.map(function(ele, i){
         if(ele.id === action.payload.id){
           return  Object.assign({}, action.payload, {start: new Date(action.payload.start)}, {end: new Date(action.payload.end)});
         } else {
            return ele
         }
        });
        console.log(re, "reducer result")
        return {
        ...state,
            events: re
        }
    },
    [REQUEST_INIT]: (state, action) => {
        return {
        ...state,
        }
    },
    [SUCCESS_ALLINTERVIEWFRAME]: (state, action) => {
        var o =  Object.assign({}, state, {events: action.payload})
        return o
    }
}, initialValues)

export default interviewFrameReducer
