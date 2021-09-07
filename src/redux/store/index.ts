import { applyMiddleware, combineReducers, createStore } from "redux";
import reducers from "../reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
