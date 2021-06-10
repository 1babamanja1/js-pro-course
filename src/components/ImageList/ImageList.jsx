import {useEffect, useState} from "react";
import {Image} from "../Image/Image";
import './imagelist.css'

function getID() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

export const ImageList = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then (result => setImages(result))
        },[]);
    
    return <div className='imageList'>{images.filter(item => item.id<=100).map(item =>
        <Image key={getID()} source={item.url}/>)}
    </div>

}