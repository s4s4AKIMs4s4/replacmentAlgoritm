import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import useList from '../hooks/UseList';

interface ICheckboxList {
  openChangeWordModal: (word: string, replacmentWord: string, key: string) => void
}

const CheckboxList: React.FC<ICheckboxList> = ({ openChangeWordModal }) => {
  const { listItems, changeChekedList } = useList()

  React.useEffect(() => {
    return () => { console.log('Unmount') }
  }, [])

  const handleListClick = (key: string) => () => {
    changeChekedList(key)
  }

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {listItems.map((listItem) => {
          const labelId = `checkbox-list-label-${listItem.key}`;

          return (
            <ListItem
              key={listItem.key}
              secondaryAction={
                <>
                  <IconButton onClick={
                    () => openChangeWordModal(listItem.word, listItem.replacmentWord, listItem.key)
                  } edge="end" aria-label="comments">
                    <SettingsIcon
                    />
                  </IconButton>
                  <IconButton edge="end" aria-label="comments"></IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={
                handleListClick(listItem.key)
              } dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={listItem.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>

                <ListItemText
                  id={labelId}
                  primary={`${listItem.word} ➜ ${listItem.replacmentWord}`} />
              </ListItemButton>

            </ListItem>
          );
        })}
      </List>
    </>
  );
}
export default CheckboxList