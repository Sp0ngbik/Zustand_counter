// import {T_LoadFromLocale} from "./settingsReducer";
//
// export type T_CounterState = {
//     counter: number;
// };
// const initialState: T_CounterState = {
//     counter: 0,
// };
//
// type T_Increment = ReturnType<typeof incrementValueAC>;
// type T_ResetValue = ReturnType<typeof resetValueAC>;
// type T_LoadedCounter = ReturnType<typeof loadedCounterAC>
// export type T_MainCounterAction =
//     | T_Increment
//     | T_ResetValue
//     | T_LoadedCounter
//     | T_LoadFromLocale
//
//
// export const counterReducer = (
//     state = initialState,
//     action: T_MainCounterAction
// ) => {
//     switch (action.type) {
//         case "INCREMENT_VALUE": {
//             return {...state, counter: state.counter + 1};
//         }
//         case "RESET_VALUE": {
//             return {...state, counter: action.minValue};
//         }
//         case "LOADED_COUNTER": {
//             return {...state, counter: action.counter}
//         }
//         case "LOAD_FROM_LOCALE": {
//             return {...state,counter: action.data.minValue}
//         }
//         default:
//             return state;
//     }
// };
//
// export const incrementValueAC = () => {
//     return {type: "INCREMENT_VALUE"} as const;
// };
// export const resetValueAC = (minValue: number) => {
//     return {type: "RESET_VALUE", minValue} as const;
// };
// export const loadedCounterAC = (counter: number) => {
//     return {type: 'LOADED_COUNTER', counter} as const
// }

export const d = 32