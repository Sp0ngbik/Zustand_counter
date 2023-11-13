import {create, StoreApi, UseBoundStore} from "zustand";

type T_StoreType = {
    counter: number;
    maxValue: number;
    minValue: number;
    informMessage: string;
    inSettingStatus: boolean;
    incrementValue: () => void;
    resetValue: () => void;
    settings: {
        onSettingMode: () => void;
        maxValueChange: (maxValue: number) => void;
        minValueChange: (minValue: number) => void;
        changeInformMessage: (message: string) => void;
        saveToLocaleStorage: (data: T_StoreType) => void;
        loadFromLocaleStorage: () => void;
    };
};

const useStored: UseBoundStore<StoreApi<T_StoreType>> = create((set) => ({
    counter: 0,
    maxValue: 5,
    minValue: 0,
    informMessage: "",
    inSettingStatus: false,
    incrementValue: () => set((state) => ({...state, counter: state.counter + 1})),
    resetValue: () => set((state) => ({...state, counter: state.minValue})),
    settings: {
        onSettingMode: () => set((state) => ({...state, inSettingStatus: true})),
        maxValueChange: (maxValue: number) => set((state) => ({...state, maxValue: maxValue})),
        minValueChange: (minValue: number) => set((state) => ({...state, minValue: minValue})),
        changeInformMessage: (message: string) => set((state) => ({...state, informMessage: message})),
        saveToLocaleStorage: (data: T_StoreType) => {
            try {
                localStorage.setItem('state', JSON.stringify(data))
                set({...data, informMessage: '', inSettingStatus: false})
            } catch (e) {
                console.log(e)
            }
        },
        loadFromLocaleStorage: () => {
            try {
                const data = localStorage.getItem('state')
                const parsedData: T_StoreType | null = data && JSON.parse(data)
                set({
                    ...parsedData,
                    minValue: parsedData?.minValue,
                    maxValue: parsedData?.maxValue,
                    counter: parsedData?.minValue,
                    informMessage: '',
                    inSettingStatus: false
                })
            } catch (e) {
                console.log(e)
            }
        }
    }
}))

export default useStored;