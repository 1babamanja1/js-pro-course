import './modal.css'
import {Button} from "../Button";
import {useContext} from "react";
import {ModalContext} from "../../Contexts";


export const Modal = ({modalInner}) => {
    const context = useContext(ModalContext)

    const clickToClose = () => {
        context.closeModal()
    }

    return (
        <div className={'background'}>
            <div className='container'>
                {modalInner}
                <Button onclick={() => {
                    clickToClose()
                }} btnName='Close'/>
            </div>
        </div>
    )
}