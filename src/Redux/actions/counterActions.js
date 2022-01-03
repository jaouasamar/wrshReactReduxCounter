import { INCREMENT } from "../types";
import { DECREMENT } from "../types";

export const increment = (number) => ({
    type: INCREMENT,
    payload:number//NUMBER
})

export const decrement = (number) => ({
    type: DECREMENT,
    payload:number
})

