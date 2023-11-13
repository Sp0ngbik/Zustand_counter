import React, {ChangeEvent, useEffect} from 'react';
import Button from "../Button/Button";
import style from './setting.module.css'
import useStored from "../redux/store";

const Setting = () => {
    const {
        minValue,
        inSettingStatus,
        maxValue,
        settings
    } = useStored()
    useEffect(() => {
        (settings.loadFromLocaleStorage())
    }, [settings]);
    const handleSave = () => {
        settings.loadFromLocaleStorage()
        // settings.saveToLocaleStorage()
        // settings.saveToLocaleStorage()
        // dispatch(loadedCounterAC(settingsState.minValue))
        // dispatch(saveState(settingsState))
    }

    const valueValidator = () => {
        return minValue < 0 || minValue >= maxValue
    }

    const maxValueConfigHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settings.maxValueChange(Number(e.currentTarget.value))
    }
    const minValueConfigHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settings.minValueChange(Number(e.currentTarget.value))
    }
    const onCheckValidationText = () => {
        return valueValidator() ? settings.changeInformMessage('Invalid Values')
            : settings.changeInformMessage('Select values and press \'set\'')
    }
    return (
        <div className={style.settingBlock}>
            <p>Max Value: <input
                className={minValue >= maxValue ? style.maxValueError : ''}
                type="number"
                onClick={() => {
                    onCheckValidationText();
                    settings.onSettingMode()
                    // dispatch(onSettingModeAC())
                }}
                onChange={maxValueConfigHandler}
                value={maxValue}
            />
            </p>
            <p>Min Value: <input
                className={valueValidator() ? style.minValueError : ''}
                type={'number'}
                onClick={() => {
                    onCheckValidationText();
                    settings.onSettingMode()
                }}
                onChange={minValueConfigHandler}
                value={minValue}
            />
            </p>
            <Button
                disabled={valueValidator}
                inSettingMode={inSettingStatus}
                callback={handleSave}
                title={'Set'}/>
        </div>
    );
};

export default Setting;