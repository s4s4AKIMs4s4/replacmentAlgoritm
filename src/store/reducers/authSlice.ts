import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IListItem } from "../../models"

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