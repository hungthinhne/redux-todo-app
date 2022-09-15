import { createStore } from "redux";
import rootReducer from "./reduce";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers); //initValue, enhancers

export default store