const initialState = {
    count: 0
}
export const topickReducer = (state = { count: 0 } , action) => {
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({}, state, {
                count : state.count + action.payload
            });
            break;
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state;
            break;
    }
}
