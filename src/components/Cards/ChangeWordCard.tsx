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
import { IChangeWord } from '../../models';
import useList from '../../hooks/UseList';
import useCardchangeWords from '../../hooks/useCardchangeWords';

const ariaLabel = { 'aria-label': 'description' };

const  ChangeWordCard:React.FC<IChangeWord> = ( props ) => {
  const {addNewListItem, listItems, changeListItem} = useList()
  const {changeReplacment, changeWord, wordState, setWordState} = useCardchangeWords()

  const changeWordHandler = (e:React.MouseEvent<HTMLButtonElement>) => {    
    const word =  wordState.word || props.word
    const replacmentWord = wordState.replacmentWord || props.replacmentWord
    changeListItem(props.wordKey, word, replacmentWord)
    props.handleClose()
  }

  return (
    <Card sx={style}>
      <CardContent>
          <div className={'ModalHeader'}>
            
            <Typography variant="h5" component="div">
                Change Word
            </Typography>

            <div  className = {'ModalHeader__closeButton'}>
              <CloseIcon onClick = {props.handleClose}/>
            </div>

          </div>

        <div  className={'modalForm'}>
          <div>
            <Typography variant="body2">
              The word you want to replace
            </Typography>
          </div>

          <div>
            <Input onChange={changeWord} defaultValue={props.word} inputProps={ariaLabel} />
          </div>
          </div>

          <div  className={'modalForm'}>
            <div>
              <Typography variant="body2">
                Replacement word
              </Typography>
            </div>
            
            <div>
              <Input  onChange={changeReplacment} defaultValue={props.replacmentWord} inputProps={ariaLabel} />
            </div>
        </div>

      </CardContent>

      <CardActions>
        <Button onClick={changeWordHandler} size="small">Change</Button>
      </CardActions>
    </Card>
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 275
};

export default React.memo(ChangeWordCard)

