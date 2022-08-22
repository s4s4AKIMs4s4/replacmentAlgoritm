import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IListItem } from "../../models"
import { v4 as uuidv4 } from 'uuid';

interface IInitialState {
    list:IListItem[]
}
const initialState: IInitialState = {
    list:[
        {
            key:uuidv4(),
            checked:false,
            word:'pod',
            replacmentWord:'sas'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'phonk',
            replacmentWord:'fonk'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'set',
            replacmentWord:'sit'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'pod',
            replacmentWord:'sas'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'phonk',
            replacmentWord:'fonk'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'set',
            replacmentWord:'sit'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'pod',
            replacmentWord:'sas'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'phonk',
            replacmentWord:'fonk'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'set',
            replacmentWord:'sit'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'pod',
            replacmentWord:'sas'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'phonk',
            replacmentWord:'fonk'
        },
        {
            key:uuidv4(),
            checked:false,
            word:'set',
            replacmentWord:'sit'
        }   
    ] 
}

export const listSlice = createSlice({
    name:'listItems',
    initialState,
    reducers:{
        setListItems(state:IInitialState, action:PayloadAction<IListItem[]>){
            // alert('set')
            //@ts-ignore
            // chrome.runtime.sendMessage({replaceState: action.payload})
            state.list = action.payload            
        }
    }
})

export default listSlice.reducer;


