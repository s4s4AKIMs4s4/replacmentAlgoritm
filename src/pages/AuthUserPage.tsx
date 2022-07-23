import { Button } from '@mui/material'
import React, { useState } from 'react'
import CheckboxList from '../components/CheckboxList'
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/App.css'
import CreateNewWorldModal from '../components/modals/createNewWorldModal';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { listSlice } from '../store/reducers/listSlice';
import useWordsModal from '../hooks/useWordsModal';
function Layout(){

    const {ModalCard, closeModal, open, openChangeWordModal, openCreteWordModal,openModal} = useWordsModal()

    return <>
        <div className = 'content'>
            <CreateNewWorldModal open = {open}  handleClose = {closeModal}> 
                {ModalCard}
            </CreateNewWorldModal>

            <div className='card'>
                <div className = "header">
                    <Button variant="outlined" onClick={() => {openCreteWordModal()}}>Create</Button>
                    <SettingsIcon/>
                </div>
            </div>
            <div>
                <CheckboxList/>
            </div>
        </div>
    </>
}
export default Layout