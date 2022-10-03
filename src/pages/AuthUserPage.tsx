import { Button } from '@mui/material'
import React from 'react'
import CheckboxList from '../components/CheckboxList'
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/App.css'
import useWordsModal from '../hooks/useWordsModal';
import useList from '../hooks/UseList';

function Layout() {
    const {
        openChangeWordModal,
        openCreteWordModal,
        Modal
    } = useWordsModal()

    const { removeListItems } = useList()

    return <>
        <div className='content'>
            {Modal}
            
            <div className="header">
                <div className='header__card'>
                    <Button className="header__create-button" variant="outlined" onClick={() => openCreteWordModal() }>Create</Button>
                    <DeleteIcon className="header__delete-button" onClick={() => removeListItems()} />
                </div>
            </div>

            <div>
                <CheckboxList
                    openChangeWordModal={openChangeWordModal}
                />
            </div>
        </div>
    </>
}
export default Layout