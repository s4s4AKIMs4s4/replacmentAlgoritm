import React from 'react'
import { useAppSelector } from '../hooks/redux'
import AuthUserPage from '../pages/AuthUserPage'
import NotAuthPage from '../pages/NotAuthPage'

function Layout() {
  const isAuth = useAppSelector(state => state.authReducer.isAuth)
  return <>
    {
      isAuth
        ? <AuthUserPage />
        : <NotAuthPage />
    }
  </>
}
export default Layout