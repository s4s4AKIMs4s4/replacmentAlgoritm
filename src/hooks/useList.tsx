import { useCallback, useState } from "react"
import { IListItem } from "../models"
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "./redux";
import { listSlice } from "../store/reducers/listSlice";

export default function useList() {

    const listItems = useAppSelector(state => state.userReducer.list)
    const { setListItems } = listSlice.actions
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const findListElementById = (key: string): undefined | IListItem => {
        return listItems.find((listItem) => {
            return listItem.key === key
        })
    }

    const changeChekedList = useCallback((key: string) => {
        dispatch(
            setListItems(listItems.map((listItem) => {
                if (listItem.key === key)
                    return { ...listItem, checked: !listItem.checked }
                else return { ...listItem }
            }))
        )
    }, [listItems])

    const addNewListItem = (word: string, replacmentWord: string) => {
        const newObj: IListItem = {
            checked: false,
            key: uuidv4(),
            replacmentWord: replacmentWord,
            word: word
        }
        const newList = listItems.concat({ ...newObj })
        dispatch(setListItems(newList))
    }

    const removeListItems = () => {
        dispatch(setListItems(listItems.filter((listItem) => !listItem.checked)))
    }
  
    const changeListItem = (key: string, word: string, replacmentWord: string) => {
        dispatch(setListItems(listItems.map((listItem) => {
            if (listItem.key === key)
                return {
                    ...listItem,
                    replacmentWord: replacmentWord,
                    word: word
                }
            else return { ...listItem }
        })))
    }
    return { listItems, changeChekedList, addNewListItem, removeListItems, changeListItem }
}