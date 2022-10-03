import { Button } from '@mui/material'
import React from 'react'
import '../styles/App.css'
import useWordsModal from '../hooks/useWordsModal';
import { Typography } from '@mui/material';

function NotAuthPage() {
    const {
        openCreteWordModal,
        Modal
    } = useWordsModal()

    return <>
        <div className='content'>
            {Modal}
            <div  className="header">
                <Button className="header__create-button" variant="outlined" onClick={() => { openCreteWordModal() }}>Create</Button>
            </div>

            <div>
                <Typography align={'center'}>
                    create your first replacement for the word you would like to replace on all web pages
                </Typography>
            </div>

        </div>
    </>
}
export default NotAuthPage