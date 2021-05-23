
const SUBTRACT = "SUBTRACT";

export const subtract = () => {
    return {
        type: SUBTRACT,
        value: Math.floor(Math.random() * 1000 + 1)
    }
}