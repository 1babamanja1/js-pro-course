import './onlinerPost.css'
import {useState} from "react";

export const OnlinerPost = ({backgroundImage, category, callout, onlinerTitle, onlinerTitle2}) => {
    const [title, setTitle] = useState(onlinerTitle)
    const postOnClick = () => {
            setTitle(onlinerTitle2)
    }
    return(
        <div className='onlinerPost' onClick={postOnClick} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="postHeader">
                <div className="category">{category}</div>
                <div className="callout">{callout}</div>
            </div>
        <div className="onlinerTitle">{title}</div>
    </div>
    )
}
