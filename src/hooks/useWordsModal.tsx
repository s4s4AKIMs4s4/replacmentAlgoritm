import { useState } from "react";
import React from "react";
import CreateWordCard from "../components/Cards/CreateWordCard";
import ChangeWordCard from "../components/Cards/ChangeWordCard";

export default function useWordsModal(){
    const [open,setOpen] = useState<boolean>(false)
    const closeModal = () => setOpen(false)
    const openModal = () => setOpen(true)
    const  [ModalCard, setModalCard] = useState<JSX.Element>(<></>)

    const openCreteWordModal = () => {
        setOpen(true)
        setModalCard( 
            <CreateWordCard 
                handleClose={closeModal}
            /> 
        )
    }

    const openChangeWordModal = (word:string, replacmentWord:string, key:string) => {
        setOpen(true)
        setModalCard(<ChangeWordCard 
            handleClose={closeModal}
            replacmentWord = { replacmentWord }
            word = { word }
            wordKey = { key }
        />) 
    }

    return {
        open, 
        closeModal,
        openModal,
        ModalCard,
        openChangeWordModal,
        openCreteWordModal
    }
}