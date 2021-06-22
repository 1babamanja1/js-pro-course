import {useState} from "react";
import {ModalContext} from "./ModalContext";
import {Modal} from "../components/Modal";

export const ModalProvider = ({children}) => {
    const [modalOpened, setModalOpened] = useState(false)
    const [modalContent, setModalContent] = useState('')

    const openModal = (modalInner) => {
        setModalOpened(true)
        setModalContent(modalInner)
    }

    const closeModal = () => {
        setModalOpened(false)
    }

    const valueOfProvider = {openModal, closeModal}

    return (
        <ModalContext.Provider value={valueOfProvider}>
            {modalOpened && <Modal {...modalContent}/>}
            {children}
        </ModalContext.Provider>
    )
}