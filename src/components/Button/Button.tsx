import React, {FC} from 'react';

type ButtonTitle = 'Inc' | 'Reset' | 'Set'
type T_ButtonProps = {
    title: ButtonTitle,
    callback: () => void
    disabled: () => boolean
    inSettingMode?: boolean
}
const Button: FC<T_ButtonProps> = ({title, inSettingMode, callback, disabled}) => {
    return (
        <button disabled={inSettingMode ? inSettingMode: disabled()} onClick={() => callback()}>{title}</button>
    );
};

export default Button;