import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IListItem } from "../../models"

interface IInitialState {
    list:IListItem[]
}

const initialState: IInitialState = {
    list:[] 
}

export const listSlice = createSlice({
    name:'listItems',
    initialState,
    reducers:{
        setListItems(state:IInitialState, action:PayloadAction<IListItem[]>){
            //@ts-ignore
            chrome.runtime.sendMessage({replaceState: action.payload})
            state.list = action.payload            
        }
    }
})

export default listSlice.reducer;