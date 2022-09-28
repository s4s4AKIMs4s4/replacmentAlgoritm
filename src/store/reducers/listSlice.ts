import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IListItem } from "../../models"
// import { v4 as uuidv4 } from 'uuid';
import shortid from 'shortid';

interface IInitialState {
    list:IListItem[]
}
const initialState: IInitialState = {
    list:[
        // {
        //     key:shortid.generate(),
        //     checked:false,
        //     word:'pod',
        //     replacmentWord:'sas'
        // },
        // {
        //     key:shortid.generate(),
        //     checked:false,
        //     word:'phonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonkphonk',
        //     replacmentWord:'fonk'
        // },
        // {
        //     key:shortid.generate(),
        //     checked:false,
        //     word:'set',
        //     replacmentWord:'sit'
        // }
    ] 
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