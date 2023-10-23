import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Setting from "./components/Setting/Setting";
import {useAppDispatch, useAppSelector} from "./components/hooks/hooks";
import {incrementValueAC, resetValueAC} from "./components/redux/reducers/counterReducer";
function App() {
    const counterState = useAppSelector(state => state.counterReducer)
    const settingState = useAppSelector(state => state.settingsReducer)
    const dispatch = useAppDispatch()
    const onMaxValue = () => settingState.maxValue === counterState.counter
    const increaseValue = () => {
        dispatch(incrementValueAC())
    }
    const resetValue = () => {
        dispatch(resetValueAC(settingState.minValue))
    }
    const valueValidator = () => {
        return settingState.minValue < 0 || settingState.minValue >= settingState.maxValue
    }
    return (
        <div className="App">
            <div>
                <Setting
                />
            </div>
            <div className='counter_wrapper'>
                {settingState.informMessage ?
                    <div
                        className={valueValidator() ? 'errorMessage' : 'informMessage'}>{settingState.informMessage}</div> :
                    <div
                        className={settingState.maxValue === counterState.counter ? 'counterError' : 'counterStyle'}>{counterState.counter}</div>}
                <div className='button_section'>
                    <Button title={'Inc'} inSettingMode={settingState.inSettingStatus} disabled={onMaxValue}
                            callback={increaseValue}/>
                    <Button title={'Reset'} disabled={() => settingState.inSettingStatus} callback={resetValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
