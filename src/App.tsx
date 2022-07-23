import { Button } from '@mui/material'
import React from 'react'
import CheckboxList from './components/CheckboxList'
import SettingsIcon from '@mui/icons-material/Settings';
import './styles/App.css'
import CreateNewWorldModal from './components/modals/createNewWorldModal';
import Layout from './components/Layout';
function App(){

    const [open,setOpen] = React.useState<boolean>(false)
    const handleClose = () => {
      setOpen(false)
    }

    return <>
        <div>
           <Layout/>
        </div>
    </>
}
export default App