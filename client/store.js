import { createStore } from "redux";
import bigReducer from "./reducers/passwordReducer"

const store = createStore(bigReducer);

export default store;
