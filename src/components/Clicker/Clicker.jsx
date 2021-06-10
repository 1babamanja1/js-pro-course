import {useEffect, useState} from 'react';
import { Button } from '../Button';
import { Viewer } from '../Viewer';
import './clicker.css'

export const Clicker = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count > 5){
            setCount(count-1)
        }
    },[count])

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
    <div className='clicker'>
        <Viewer text = {count} />
        <Button sign='plus' onclick={ countUp } btnName='UP' />
        <Button sign='minus' onclick={ countDown } btnName='DOWN' />
        <Button sign='reset' onclick={ countReset }  btnName='RESET' />
    </div>)
}