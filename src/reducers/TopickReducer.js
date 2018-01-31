const initialState = {
    count: 0
}
export const topickReducer = (state = { count: 0 } , action) => {
    console.log(action, state)
    switch(action.type){
        case 'increment':
            return Object.assign({}, state, {
                count : state.count + action.payload
            });
            break;
        default:
            return state;
            break;
    }
}
