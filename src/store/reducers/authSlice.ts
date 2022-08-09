import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IListItem } from "../../models"
import { v4 as uuidv4 } from 'uuid';

interface IAuthState {
    isAuth:boolean
}
const initialState: IAuthState = {
    isAuth:false
}

export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        setAuth(state:IAuthState, action:PayloadAction<boolean>){
            state.isAuth = action.payload            
        }
    }
})

export default AuthSlice.reducer;