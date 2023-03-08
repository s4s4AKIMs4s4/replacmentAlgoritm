
import { useMemo, useRef, useState,useCallback } from "react";
import CreateWordCard from "../components/Cards/CreateWordCard";
import ChangeWordCard from "../components/Cards/ChangeWordCard";
import CreateNewWorldModal from "../components/modals/createNewWorldModal";

enum ModalEnum {
    CREATE = "CREATE",
    CHANGE = "CHANGE",
    NONE = "NONE"
}

interface IModalSatate {
    isOpen: boolean,
    currentModal: ModalEnum
}

export default function useWordsModal() {
    const [ModalCard, setModalCard] = useState<JSX.Element>(<></>)
    const [ModalSatate, setModalState] = useState<IModalSatate>({
        currentModal: ModalEnum.NONE,
        isOpen: false
    })

    const openCreteWordModal = useCallback(() => {
        setModalState({
            currentModal: ModalEnum.CREATE,
            isOpen: true
        })
    },[])

    const closeModal = useCallback(() => {
        setModalState((prev) => {
            return { ...prev, isOpen: false }
        })
    },[])

    interface IChangeObject {
        word: string,
        replacmentWord: string,
        key: string
    }

    const ChangeObject = useRef<IChangeObject>(
        {} as IChangeObject
    )
    const openChangeWordModal = useCallback((word: string, replacmentWord: string, key: string) => {
        ChangeObject.current = {
            word,
            replacmentWord,
            key,
        }
        setModalState({
            currentModal: ModalEnum.CHANGE,
            isOpen: true
        })
    },[])

    const Modal = useMemo(() => {
        if (ModalSatate.currentModal === ModalEnum.CREATE)
            return <CreateNewWorldModal open={ModalSatate.isOpen} handleClose={closeModal}>
                <CreateWordCard
                    handleClose={closeModal}
                />
            </CreateNewWorldModal>
        else
            return <CreateNewWorldModal open={ModalSatate.isOpen} handleClose={closeModal}>
                <ChangeWordCard
                    handleClose={closeModal}
                    replacmentWord={ChangeObject.current.replacmentWord}
                    word={ChangeObject.current.word}
                    wordKey={ChangeObject.current.key}
                />
            </CreateNewWorldModal>
    }, [open, ModalSatate])

    return {
        Modal,
        open,
        closeModal,
        ModalCard,
        openChangeWordModal,
        openCreteWordModal
    }
}

