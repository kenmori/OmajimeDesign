import {handleActions} from 'redux-actions'
import {REQUEST_INTERVIEWFRAME, MOVE_INTERVIEWFRAME} from '../actions/interviewFrameAction'

const initialValues = {
  events : [{
    id: 1,
    title: 'Long Event',
    start: new Date(2018, 3, 15),
      end: new Date(2018, 3, 15),
    isComp: false
  }],
}
export const interviewFrameReducer = handleActions({
    [REQUEST_INTERVIEWFRAME]: (state, action) => ({
        ...state,
    }),
    [MOVE_INTERVIEWFRAME]: (state, action) => {
        debugger;
        return {
    ...state,
        events: action.payload.events
    }
    }
}, initialValues)

export default interviewFrameReducer
