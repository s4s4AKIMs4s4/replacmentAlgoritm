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
  const listItems = useAppSelector(state => state.userReducer.list)
  const { setListItems } = listSlice.actions
  const dispatch = useAppDispatch()

  //for test  
    useEffect(() => {
      //@ts-ignore
      chrome.storage.sync.get(['replaceState'], function(result) {
        dispatch(
          setListItems(result.replaceState)
        )
      })

      // dispatch(setListItems([ {
      //   key:uuidv4(),
      //   checked:false,
      //   word:'phonk',
      //   replacmentWord:'fonk'
      // }]))
      // return () => {
      //   console.log('unmount')
      // }
    },[])

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
export default React.memo(App)