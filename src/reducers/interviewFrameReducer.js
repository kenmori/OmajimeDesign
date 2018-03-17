import {handleActions} from 'redux-actions'
import {update} from 'immutability-helper'
import {SUCCESS_ALLINTERVIEWFRAME, SUCCESS_INTERVIEWFRAME, REQUEST_INTERVIEWFRAME, MOVE_INTERVIEWFRAME, REQUEST_INIT} from '../actions/interviewFrameAction'


const initialValues = {
  events : [{
    id: 1,
    title: 'Long Eventfafa',
    start:  new Date(2018, 3, 15),
      end: new Date(2018, 3, 15),
    isComp: false
  }],
}
export const interviewFrameReducer = handleActions({
    [REQUEST_INTERVIEWFRAME]: (state, action) => ({
        ...state,
    }),
    //    [MOVE_INTERVIEWFRAME]: (state, action) => {
    //   return {
    //       ...state,
    //       events: action.payload.events
    //    }
    //},
    [SUCCESS_INTERVIEWFRAME]: (state, action) => {
        return {
        ...state,
            events: [Object.assign({
                id: action.payload[0].id,
                title: action.payload[0].title,
                start: new Date(action.payload[0].start),
                end: new Date(action.payload[0].end),
                isComp: action.payload[0].isComp
            })]
        }
    },
    [REQUEST_INIT]: (state, action) => {
        console.log(state, action.payload, "request init")
        debugger;
        return {
        ...state,
        }
    },
    [SUCCESS_ALLINTERVIEWFRAME]: (state, action) => {
        console.log(state, action.payload, "request success")
        var o =  Object.assign({}, state, {events: action.payload})
        return o
    }
}, initialValues)

console.log(initialValues.events[0].start, "nini")
export default interviewFrameReducer
