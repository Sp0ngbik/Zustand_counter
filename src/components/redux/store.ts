import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer, T_MainCounterAction} from "./reducers/counterReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

export const rootReducer = combineReducers(
    {
        counterReducer: counterReducer
    }
)

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, T_MainCounterAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, T_MainCounterAction>
