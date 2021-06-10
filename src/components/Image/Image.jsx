import './image.css'
import {useState} from "react";


export const Image = ({source}) => {
    const [className, setClassName] = useState('image')
    const onclick = () => {
        setClassName(className === 'image' ? 'image big' : 'image')
    }
    return <img src={source} onClick={onclick} className={className} alt=''  />
}