import { useState } from 'react';
import { Button } from '../Button/Button';
import { Viewer } from '../Viewer/Viewer';
import './clicker.css'

export const Clicker = () => {
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(count + 1)
    }
    const countDown = () => {
        setCount(count - 1)
    }
    const countReset = () => {
        setCount(0)
    }
        return(
    <div class='clicker'>
        <Viewer text = {count} ></Viewer>
        <Button sign='plus' onclick={ countUp } btnName='UP' />
        <Button sign='minus' onclick={ countDown } btnName='DOWN' />
        <Button sign='reset' onclick={ countReset }  btnName='RESET' />
    </div>)
}