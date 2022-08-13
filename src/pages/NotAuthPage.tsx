import { Button } from '@mui/material'
import React, { useState } from 'react'
import CheckboxList from '../components/CheckboxList'
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/App.css'
import CreateNewWorldModal from '../components/modals/createNewWorldModal';
import useWordsModal from '../hooks/useWordsModal';
import useList from '../hooks/UseList';
import { Typography } from '@mui/material';

function NotAuthPage(){
    const {
        ModalCard, 
        closeModal, 
        open, 
        openChangeWordModal, 
        openCreteWordModal,
        Modal
    } = useWordsModal()

    const {removeListItems} = useList()
    React.useEffect(() =>{
        return () => {console.log('Unmount')}
      })

    const removeListImtemClickHandler = () => {
        removeListItems()
    }  

    return <>
        <div className = 'content'>
            {/* Modal */}
            {/* <CreateNewWorldModal open = {open}  handleClose = {closeModal}> 
                {ModalCard}

            </CreateNewWorldModal> */}
            {Modal}
            <div className='card'>
                <div className = "notAuthPage__header">
                    <Button variant="outlined" onClick={() => {openCreteWordModal()}}>Create</Button>
                </div>
            </div>

            <div>
                <Typography align = {'center'}>
                    create your first replacement for the word you would like to replace on all web pages
                </Typography>
            </div>

        </div>
    </>
}
export default NotAuthPage