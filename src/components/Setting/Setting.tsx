import React, {ChangeEvent} from 'react';
import Button from "../Button/Button";
import style from './setting.module.css'
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {
    changeInformMessageAC,
    offSettingModeAC,
    onChangeMaxValueAC,
    onChangeMinValueAC,
    onSettingModeAC,
    saveState,
} from "../redux/reducers/counterReducer";


const Setting = () => {
    const counterState = useAppSelector(state => state.counterReducer)
    const dispatch = useAppDispatch()
    const handleSave = () => {
        dispatch(offSettingModeAC())
        dispatch(saveState(counterState))
    }
    const valueValidator = () => {
        return counterState.minValue < 0 || counterState.minValue >= counterState.maxValue
    }
    const setSettingValue = () => {
        dispatch(offSettingModeAC())
    }
    const maxValueConfigHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxValueAC(Number(e.currentTarget.value)))
    }
    const minValueConfigHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMinValueAC(Number(e.currentTarget.value)))
    }
    const onCheckValidationText = () => {
        return valueValidator() ? dispatch(changeInformMessageAC('Invalid Values'))
            : dispatch(changeInformMessageAC('Select values and press \'set\''))
    }
    return (
        <div className={style.settingBlock}>
            <p>Max Value: <input
                className={counterState.minValue >= counterState.maxValue ? style.maxValueError : ''}
                type="number"
                onClick={() => {
                    onCheckValidationText();
                    dispatch(onSettingModeAC())
                }}
                onChange={maxValueConfigHandler}
                value={counterState.maxValue}/>
            </p>
            <p>Min Value: <input
                className={valueValidator() ? style.minValueError : ''}
                type={'number'}
                onClick={() => {
                    onCheckValidationText();
                    dispatch(onSettingModeAC())
                }}
                onChange={minValueConfigHandler}
                value={counterState.minValue}/>
            </p>
            {/*<button onClick={handleSave}>sdasd</button>*/}
            <Button disabled={valueValidator} inSettingMode={!counterState.inSettingStatus}
                    callback={handleSave}
                    title={'Set'}/>
        </div>
    );
};

export default Setting;