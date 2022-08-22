import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import CheckboxList from './components/CheckboxList'
import SettingsIcon from '@mui/icons-material/Settings';
import './styles/App.css'
import CreateNewWorldModal from './components/modals/createNewWorldModal';
import Layout from './components/Layout';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { listSlice } from './store/reducers/listSlice';
import { v4 as uuidv4 } from 'uuid';

function App(){
    return <>
        <div>
           <Layout/>
        </div>
    </>
}
export default React.memo(App)