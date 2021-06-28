import './onlinerPost.css'
import {useState} from "react";

export const OnlinerPost = ({backgroundImage, category, callout, onlinerTitle, body}) => {
    const [title] = useState(onlinerTitle)
    const postOnClick = () => {
    }

    return (

        <div className='onlinerPost' onClick={postOnClick} style={{backgroundImage: `url(${backgroundImage})`}}>

                <div className="postHeader">
                    <div className="category">{category}</div>
                    <div className="callout">{callout}</div>
                </div>
                <div className="onlinerTitle">{title}</div>
        </div>)
}