import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import AuthUserPage from '../pages/AuthUserPage'
import NotAuthPage from '../pages/NotAuthPage'
import { AuthSlice } from '../store/reducers/authSlice'
import { listSlice } from '../store/reducers/listSlice'
function Layout(){    
    const isAuth = useAppSelector(state => state.authReducer.isAuth)
    const { setAuth } = AuthSlice.actions
    const { setListItems } = listSlice.actions
    const dispatch = useAppDispatch()
    useEffect(() => {
      //@ts-ignore
      // chrome.storage.sync.get(['replaceState'], function(result) {
      //   if(result.replaceState){
      //     dispatch(
      //       setListItems(result.replaceState)
      //     )
      //     setAuth(true)
      //   }
      // })
    },[])
    return <>
      {
        isAuth 
          ? <AuthUserPage/>
          : <NotAuthPage/>
      }
        
    </>
}
export default Layout