//Доделать: проверка input на тип данных (чтобы вводились только цифры)

import {useEffect, useState} from 'react';
import {Button} from '../Button';
import {Viewer} from '../Viewer';
import {Input} from "../Input";
import './clicker.css'

export const Clicker = () => {
    const [count, setCount] = useState(0)
    const [lowerPoint, setLowerPoint] = useState(-5)
    const [upperPoint, setUpperPoint] = useState(5)
    const lowerChangeValue = (event) => {
        setLowerPoint(event.target.value)
    }
    const upperChangeValue = (event) => {
        setUpperPoint(event.target.value)
    }

    useEffect(() => {
        if (count > upperPoint) {
            countDown()
        }
        if (count < lowerPoint) {
            countUp()
        }
    }, [count, lowerPoint, upperPoint])

    const countUp = () => {
        setCount(count + 1)
    }
    const countDown = () => {
        setCount(count - 1)
    }
    const countReset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>Clicker</h1>
            <span>Click from {<Input inputValue={lowerPoint} onChangeValue={lowerChangeValue}/>} to <Input
                inputValue={upperPoint} onChangeValue={upperChangeValue}/></span>
            <div className='clicker'>
                <Viewer text={count}/>
                <Button sign='plus' onclick={countUp} btnName='UP'/>
                <Button sign='minus' onclick={countDown} btnName='DOWN'/>
                <Button sign='reset' onclick={countReset} btnName='RESET'/>
            </div>
        </div>)
}