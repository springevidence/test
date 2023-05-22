import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}
const Button = (props: ButtonPropsType) => {
    const disabledButton = props.disabled ? ' ' + s.disabled : s.btns
    return (
        <button className={disabledButton} onClick={props.callback} disabled={props.disabled}>{props.name} </button>
    );
};

export default Button;