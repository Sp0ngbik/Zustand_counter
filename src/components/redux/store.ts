import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer, T_MainCounterAction} from "./reducers/counterReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {settingsReducer, T_MainSettingReducer} from "./reducers/settingsReducer";

export const rootReducer = combineReducers(
    {
        counterReducer: counterReducer,
        settingsReducer: settingsReducer
    }
)
export type T_MainAppAction = T_MainSettingReducer|T_MainCounterAction
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, T_MainAppAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, T_MainAppAction>
