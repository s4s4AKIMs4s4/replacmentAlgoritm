import { useState } from "react";
import React from "react";
import WordCard from "../components/BasicCard";
export default function useWordsModal(){
    const [open,setOpen] = useState<boolean>(false)
    const closeModal = () => setOpen(false)
    const openModal = () => setOpen(true)
    const  [ModalCard,setModalCard] = useState<JSX.Element>(<></>)

    const openCreteWordModal = () => {
        setOpen(true)
        setModalCard( 
            <WordCard 
                handleClose={closeModal}
                replacmentWord = {''}
                word = {''}
            /> 
        )
    }

    const openChangeWordModal = (word:string, replacmentWord:string) => {
        setOpen(true)
        setModalCard(<WordCard 
            handleClose={closeModal}
            replacmentWord = {word}
            word = {replacmentWord}
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