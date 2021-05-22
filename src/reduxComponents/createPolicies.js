
// Create Policies Action Creators
const createPolicies = (name) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: 50
        }
    }
}

export default createPolicies;