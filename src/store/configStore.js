// This file configures Redux Store settings
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import portfolioReducers from "../reducers/portfolioReducers";

// Only for development use
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const launchStore = () => {
    return createStore(
        combineReducers({
            portfolio: portfolioReducers,
            // Add any new reducers here
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
}

export default launchStore;