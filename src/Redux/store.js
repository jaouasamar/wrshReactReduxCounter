import { createStore } from "redux";
import counterReducers from "./reducer/counterReducers";
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(counterReducers,devtools)
export default store