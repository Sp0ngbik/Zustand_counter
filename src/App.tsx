import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Setting from "./components/Setting/Setting";
import useStored from "./components/redux/store";

function App() {
    const {
        incrementValue,
        resetValue,
        minValue,
        maxValue,
        counter,
        informMessage,
        inSettingStatus,
    } = useStored();
    // const counterState = useAppSelector(state => state.counterReducer)
    // const settingState = useAppSelector(state => state.settingsReducer)
    const onMaxValue = () => maxValue === counter
    const increaseValue = () => {
        incrementValue()
    }
    const resetValueHandler = () => {
        resetValue()
    }
    const valueValidator = () => {
        return minValue < 0 || minValue >= maxValue
    }
    return (
        <div className="App">
            <div>
                <Setting
                />
            </div>
            <div className='counter_wrapper'>
                {informMessage ?
                    <div
                        className={valueValidator() ? 'errorMessage' : 'informMessage'}>{informMessage}</div> :
                    <div
                        className={maxValue === counter ? 'counterError' : 'counterStyle'}>{counter}</div>}
                <div className='button_section'>
                    <Button title={'Inc'} inSettingMode={inSettingStatus} disabled={onMaxValue}
                            callback={increaseValue}/>
                    <Button title={'Reset'} disabled={() => inSettingStatus} callback={resetValueHandler}/>
                </div>
            </div>
        </div>
    );
}

export default App;
