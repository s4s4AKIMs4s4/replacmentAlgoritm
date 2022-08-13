import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/card.css'
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import { IWordCard, IWordState } from '../../models';
import useList from '../../hooks/UseList';
import useWordsModal from '../../hooks/useWordsModal';
import useCardchangeWords from '../../hooks/useCardchangeWords';

const ariaLabel = { 'aria-label': 'description' };

const  CreateWordCard = React.forwardRef<any,IWordCard>(( {handleClose},ref) => {
  const {addNewListItem, listItems, changeChekedList} = useList()
  const {changeReplacment, changeWord, wordState} = useCardchangeWords()

  const createWord = (e:React.MouseEvent<HTMLButtonElement>) => {
    addNewListItem(wordState.word, wordState.replacmentWord)
    handleClose()
  }

  return (
    <Card sx={style}>
      <CardContent>
          <div className={'ModalHeader'}>
            
            <Typography variant="h5" component="div">
              Create word
            </Typography>

            <div  className = {'ModalHeader__closeButton'}>
              <CloseIcon onClick = {handleClose}/>
            </div>

          </div>

        <div  className={'modalForm'}>
          <div>
            <Typography variant="body2">
              the word you want to replace
            </Typography>
          </div>

          <div>
            <Input onChange={changeWord} defaultValue={''} inputProps={ariaLabel} />
          </div>
          </div>

          <div  className={'modalForm'}>
            <div>
              <Typography variant="body2">
                replacement word
              </Typography>
            </div>
            
            <div>
              <Input onChange={changeReplacment} defaultValue={''} inputProps={ariaLabel} />
            </div>
        </div>

      </CardContent>

      <CardActions>
        <Button onClick={createWord} size="small">Create</Button>
      </CardActions>
    </Card>
  );
})
CreateWordCard.displayName = "CreateWordCard";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 275
};

export default CreateWordCard

