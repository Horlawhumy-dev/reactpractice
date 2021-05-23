
const ADD = "ADD";

export const add = () => {
    return {
        type: ADD,
        value: Math.floor(Math.random() * 1000 + 1)
    }
}