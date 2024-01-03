
import { createStore } from "redux";
import counterReducer from "./reducers/counter";

const initialState = {};

const rootReducer = (state = initialState, action) => {
    return state;
};

const store = createStore(counterReducer);

export default store;