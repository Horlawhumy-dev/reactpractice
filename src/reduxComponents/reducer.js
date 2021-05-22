
const reducer = (state = [], action) => {
    
    switch(action.type){
        case 'CREATE_CLAIMS':
            return [...state, action.payload];
        case 'CREATE_POLICY':
            return [...state, action.payload];
        case 'DELETE_POLICY':
            return [...state, action.payload];
        default:
            return state; 
    }
}

export default reducer;