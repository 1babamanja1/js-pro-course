import './post.css'
import { ModalContext } from "../../Contexts";
import {useContext} from "react";

export const Post = ({title , body , author, modalBody}) => {
    const {openModal} = useContext(ModalContext)
    const clickToOpenModal = () => {
        openModal({modalInner: <div>{modalBody}</div>})};

    return (
        <div className = 'post'>
            <p className = 'title'>{title}</p>
            <span className='post-body'>{body}</span>
            <p onClick={clickToOpenModal}>Author: <span className={'post-author'}> {author} </span> </p>
        </div>)
}