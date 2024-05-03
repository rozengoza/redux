interface ActionType {
    type: string,
    payload: number
}
const reducer = (state=0, action: ActionType) => {
    if (action.type == 'deposit'){
        return state + action.payload;
    }
    else if(action.type === 'withdraw'){
        return state - action.payload;
    }
    else {
        return state;
    }
}
export default reducer;