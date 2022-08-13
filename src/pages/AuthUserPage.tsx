import { Button } from '@mui/material'
import React, { useState } from 'react'
import CheckboxList from '../components/CheckboxList'
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/App.css'
import CreateNewWorldModal from '../components/modals/createNewWorldModal';
import useWordsModal from '../hooks/useWordsModal';
import useList from '../hooks/UseList';
import ButtonAppBar from '../components/ButtonAppBar';
import Card from '@mui/material/Card';

function Layout(){
    const {
        ModalCard, 
        closeModal, 
        open, 
        openChangeWordModal, 
        openCreteWordModal,
        openModal,
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
            
            <CreateNewWorldModal open = {open}  handleClose = {closeModal}> 
                {ModalCard}
            </CreateNewWorldModal>

            <div   style = {{
                position: 'sticky',
                top: '0px',
                zIndex:999,
                backgroundColor:'white',
                height:'55px'
            }}>    
                <div className='card'>
                    <div className = "header">
                        <Button variant="outlined" onClick={() => {openCreteWordModal()}}>Create</Button> 
                        <DeleteIcon onClick={removeListImtemClickHandler}/>
                    </div>
                </div>
            </div>
           
            <div>
                <CheckboxList 
                    openChangeWordModal = {openChangeWordModal}
                />
            </div>

        </div>
    </>
}
export default Layout