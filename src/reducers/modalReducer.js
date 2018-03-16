import {handleActions} from 'redux-actions'
import {OPEN_MODAL, CLOSE_MODAL, UPDATE_MODAL } from '../actions/modalAction'
const initialState = {
    isOpen: false,
    showModal: false
}
export const  modalReducer =  handleActions({
    [OPEN_MODAL]: (state, action) => ({
        ...state,
        showModal: action.payload.showModal,
        isOpen: true
    }),
    [CLOSE_MODAL]: (state, action) => ({
        ...state,
        showModal: action.payload.showModal,
        isOpen: false
    }),
    [UPDATE_MODAL]: (state, action) => ({
        ...state
    })
}, initialState)
