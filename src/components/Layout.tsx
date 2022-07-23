import React from 'react'
import AuthUserPage from '../pages/AuthUserPage'
function Layout(){

    const [open,setOpen] = React.useState<boolean>(false)
    const handleClose = () => {
      setOpen(false)
    }

    return <>
        <AuthUserPage/>
    </>
}
export default Layout