import {gamepadReducer} from "./reducers/gamepadReducer";
import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
}
const store = createStore(
    gamepadReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store