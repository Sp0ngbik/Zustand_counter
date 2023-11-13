// // import {AppDispatch, AppThunk} from "../store";
//
// type T_SettingsState = {
//     maxValue: number,
//     minValue: number,
//     informMessage: string,
//     inSettingStatus: boolean
// }
// const initialState: T_SettingsState = {
//     maxValue: 5,
//     minValue: 0,
//     informMessage: "",
//     inSettingStatus: false,
// };
//
// type T_OnSettings = ReturnType<typeof onSettingModeAC>;
// type T_MaxValueChange = ReturnType<typeof onChangeMaxValueAC>;
// type T_MinValueChange = ReturnType<typeof onChangeMinValueAC>;
// export type T_LoadFromLocale = ReturnType<typeof loadStateFromLocale>;
// type T_ChangeInformMessage = ReturnType<typeof changeInformMessageAC>;
// type T_SaveStateToStorage = ReturnType<typeof saveStateToLocale>;
//
// export type T_MainSettingReducer =
//     T_OnSettings
//     | T_MaxValueChange
//     | T_MinValueChange
//     | T_LoadFromLocale
//     | T_ChangeInformMessage
//     | T_SaveStateToStorage
//
// export const settingsReducer = (state = initialState, action: T_MainSettingReducer) => {
//     switch (action.type) {
//         case "ON_SETTING_MODE": {
//             return {...state, inSettingStatus: true};
//         }
//         case "MAX_VALUE_CHANGE": {
//             return {...state, maxValue: action.maxValue};
//         }
//         case "MIN_VALUE_CHANGE": {
//             return {...state, minValue: action.minValue};
//         }
//         case "CHANGE_INFORM_MESSAGE": {
//             return {...state, informMessage: action.text};
//         }
//         case "SAVE_TO_LOCALE_STORAGE": {
//             return {
//                 ...action.data,
//                 informMessage: "",
//                 inSettingStatus: false,
//             };
//         }
//         case "LOAD_FROM_LOCALE": {
//             return {
//                 ...action.data,
//                 minValue: action.data.minValue,
//                 maxValue: action.data.maxValue,
//                 informMessage: "",
//                 inSettingStatus: false,
//             };
//         }
//         default :
//             return state
//     }
// }
//
// export const onSettingModeAC = () => {
//     return {type: "ON_SETTING_MODE"} as const;
// };
// export const onChangeMaxValueAC = (maxValue: number) => {
//     return {type: "MAX_VALUE_CHANGE", maxValue} as const;
// };
// export const onChangeMinValueAC = (minValue: number) => {
//     return {type: "MIN_VALUE_CHANGE", minValue} as const;
// };
// export const changeInformMessageAC = (text: string) => {
//     return {type: "CHANGE_INFORM_MESSAGE", text} as const;
// };
// export const saveStateToLocale = (data: T_SettingsState) => {
//     return {type: "SAVE_TO_LOCALE_STORAGE", data} as const;
// };
// export const loadStateFromLocale = (data: T_SettingsState) => {
//     return {type: "LOAD_FROM_LOCALE", data} as const;
// };
//
// export const loadState = (): AppThunk => {
//     return (AppDispatch: AppDispatch) => {
//         const data = localStorage.getItem("state");
//         data && AppDispatch(loadStateFromLocale(JSON.parse(data)));
//     };
// };
//
// export const saveState = (data: T_SettingsState): AppThunk => {
//     return (AppDispatch: AppDispatch) => {
//         localStorage.setItem("state", JSON.stringify(data));
//         AppDispatch(saveStateToLocale(data));
//     };
// };
export const b = 5