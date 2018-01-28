const initialState = {
    count: 0
}
export const topickReducer = (state = { count: 0 } , action) => {
    console.log(action, state)
    switch(action.type){
        case 'increment':
            return {
                count : state.count + 1
            }
            break;
        default:
            return state;
            break;
    }
}
