import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import weatherReducer from "./reducers/weatherReducer";
import alertReducer from "./reducers/alertReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
