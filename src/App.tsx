import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Setting from "./components/Setting/Setting";
import {useAppDispatch, useAppSelector} from "./components/hooks/hooks";
import {incrementValueAC, resetValueAC} from "./components/redux/reducers/counterReducer";

export type T_CounterSettings = {
    counter: number,
    minValue: number,
    maxValue: number,
    informMessage: string,
    inSettingStatus: boolean
}

function App() {
    const counterState = useAppSelector(state => state.counterReducer)
    const dispatch = useAppDispatch()
    const onMaxValue = () => counterState.maxValue === counterState.counter
    const increaseValue = () => {
        dispatch(incrementValueAC())
    }
    const resetValue = () => {
        dispatch(resetValueAC())
    }
    const valueValidator = () => {
        return counterState.minValue < 0 || counterState.minValue >= counterState.maxValue
    }
    return (
        <div className="App">
            <div>
                <Setting
                />
            </div>
            <div className='counter_wrapper'>
                {counterState.informMessage ?
                    <div
                        className={valueValidator() ? 'errorMessage' : 'informMessage'}>{counterState.informMessage}</div> :
                    <div
                        className={counterState.maxValue === counterState.counter ? 'counterError' : 'counterStyle'}>{counterState.counter}</div>}
                <div className='button_section'>
                    <Button title={'Inc'} inSettingMode={counterState.inSettingStatus} disabled={onMaxValue}
                            callback={increaseValue}/>
                    <Button title={'Reset'} disabled={() => counterState.inSettingStatus} callback={resetValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
