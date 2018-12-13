import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import store from "../../src/config/redux"

export default () => {
    // const store = createStore(reducer, {}, applyMiddleware(thunk));
    let storeBig = store; 
    return storeBig;
}