
// Create Claims Action Creators
const createClaims = (name, amountOfClaims) => {
    return{
        type: 'CREATE_CLAIMS',
        payload: {
            name: name,
            amountofClaims: amountOfClaims
        }
    }
}


export default createClaims;
