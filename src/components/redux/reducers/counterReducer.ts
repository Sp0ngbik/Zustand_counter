import {AppDispatch, AppThunk} from "../store";

type T_CounterSettings = {
    counter: number;
    minValue: number;
    maxValue: number;
    informMessage: string;
    inSettingStatus: boolean;
};
const initialState: T_CounterSettings = {
    counter: 0,
    minValue: 0,
    maxValue: 5,
    informMessage: "",
    inSettingStatus: false,
};

type T_Increment = ReturnType<typeof incrementValueAC>;
type T_ResetValue = ReturnType<typeof resetValueAC>;
type T_OnSettings = ReturnType<typeof onSettingModeAC>;
type T_MaxValueChange = ReturnType<typeof onChangeMaxValueAC>;
type T_MinValueChange = ReturnType<typeof onChangeMinValueAC>;
type T_LoadFromLocale = ReturnType<typeof loadStateFromLocale>;
type T_ChangeInformMessage = ReturnType<typeof changeInformMessageAC>;
type T_SaveStateToStorage = ReturnType<typeof saveStateToLocale>;
export type T_MainCounterAction =
    | T_Increment
    | T_ResetValue
    | T_OnSettings
    | T_MaxValueChange
    | T_MinValueChange
    | T_ChangeInformMessage
    | T_SaveStateToStorage
    | T_LoadFromLocale;

export const counterReducer = (
    state = initialState,
    action: T_MainCounterAction
) => {
    switch (action.type) {
        case "INCREMENT_VALUE": {
            return {...state, counter: state.counter + 1};
        }
        case "RESET_VALUE": {
            return {...state, counter: state.minValue};
        }
        case "ON_SETTING_MODE": {
            return {...state, inSettingStatus: true};
        }
        case "MAX_VALUE_CHANGE": {
            return {...state, maxValue: action.maxValue};
        }
        case "MIN_VALUE_CHANGE": {
            return {...state, minValue: action.minValue};
        }
        case "CHANGE_INFORM_MESSAGE": {
            return {...state, informMessage: action.text};
        }
        case "SAVE_TO_LOCALE_STORAGE": {
            return {
                ...action.data,
                informMessage: "",
                counter: state.minValue,
                inSettingStatus: false,
            };
        }
        case "LOAD_FROM_LOCALE": {
            return {...action.data, informMessage: "", inSettingStatus: false, counter: action.data.minValue};
        }
        default:
            return state;
    }
};

export const incrementValueAC = () => {
    return {type: "INCREMENT_VALUE"} as const;
};
export const resetValueAC = () => {
    return {type: "RESET_VALUE"} as const;
};
export const onSettingModeAC = () => {
    return {type: "ON_SETTING_MODE"} as const;
};
export const onChangeMaxValueAC = (maxValue: number) => {
    return {type: "MAX_VALUE_CHANGE", maxValue} as const;
};
export const onChangeMinValueAC = (minValue: number) => {
    return {type: "MIN_VALUE_CHANGE", minValue} as const;
};
export const changeInformMessageAC = (text: string) => {
    return {type: "CHANGE_INFORM_MESSAGE", text} as const;
};
export const saveStateToLocale = (data: T_CounterSettings) => {
    return {type: "SAVE_TO_LOCALE_STORAGE", data} as const;
};
export const loadStateFromLocale = (data: T_CounterSettings) => {
    return {type: "LOAD_FROM_LOCALE", data} as const;
};

export const loadState = (): AppThunk => {
    return (AppDispatch: AppDispatch) => {
        const data = localStorage.getItem("state");
        data && AppDispatch(loadStateFromLocale(JSON.parse(data)));
    };
};

export const saveState = (data: T_CounterSettings): AppThunk => {
    return (AppDispatch: AppDispatch) => {
        localStorage.setItem("state", JSON.stringify(data));
        AppDispatch(saveStateToLocale(data));
    };
};
