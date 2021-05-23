
const intialState = {
    count: 0,
}
const reducer = (state = intialState, action) => {
    const {type, value } = action;
    switch(type){
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count -1
            };
        case 'ADD':
            return {
                count: state.count + value
            };
        case 'SUBTRACT':
            return {
                count: state.count - value
            };
        default:
            return state;
    }
}

export default reducer;