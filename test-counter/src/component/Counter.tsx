import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";

type CounterPropsType = {
    addNum: () => void
    resetToNull: () => void
    count: number
    minNum: number
    maxNum: number
}
const Counter = (props: CounterPropsType) => {
    const redClass = props.count === props.maxNum ? s.red : ''
    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <span className={redClass}>{props.count}</span>
            </div>
            <div className={s.buttons}>
                <Button name='Inc' callback={props.addNum} disabled={props.count === props.maxNum}/>
                <Button name='Reset' callback={props.resetToNull} disabled={props.count === props.minNum}/>
            </div>
        </div>
    );
};

export default Counter;