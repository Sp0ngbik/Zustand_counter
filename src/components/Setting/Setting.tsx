import React, {ChangeEvent, useLayoutEffect} from 'react';
import Button from "../Button/Button";
import style from './setting.module.css'
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {loadedCounterAC} from "../redux/reducers/counterReducer";
import {
    changeInformMessageAC,
    loadState,
    onChangeMaxValueAC,
    onChangeMinValueAC,
    onSettingModeAC,
    saveState
} from "../redux/reducers/settingsReducer";


const Setting = () => {
    const dispatch = useAppDispatch()
    const settingsState = useAppSelector(state => state.settingsReducer)
    useLayoutEffect(() => {
       dispatch(loadState())
    }, [dispatch]);
    const handleSave = () => {
        console.log(settingsState)
        dispatch(loadedCounterAC(settingsState.minValue))
        dispatch(saveState(settingsState))
    }

    const valueValidator = () => {
        return settingsState.minValue < 0 || settingsState.minValue >= settingsState.maxValue
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
                className={settingsState.minValue >= settingsState.maxValue ? style.maxValueError : ''}
                type="number"
                onClick={() => {
                    onCheckValidationText();
                    dispatch(onSettingModeAC())
                }}
                onChange={maxValueConfigHandler}
                value={settingsState.maxValue}/>
            </p>
            <p>Min Value: <input
                className={valueValidator() ? style.minValueError : ''}
                type={'number'}
                onClick={() => {
                    onCheckValidationText();
                    dispatch(onSettingModeAC())
                }}
                onChange={minValueConfigHandler}
                value={settingsState.minValue}/>
            </p>
            <Button disabled={valueValidator} inSettingMode={!settingsState.inSettingStatus}
                    callback={handleSave}
                    title={'Set'}/>
        </div>
    );
};

export default Setting;