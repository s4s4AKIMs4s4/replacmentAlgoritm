import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/card.css'
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import { IWordCard } from '../../models';
import useList from '../../hooks/UseList';
import useCardchangeWords from '../../hooks/useCardchangeWords';
import useInputHandler from '../../hooks/useInputHandler';

const ariaLabel = { 'aria-label': 'description' };

const CreateWordCard = React.forwardRef<any, IWordCard>(({ handleClose }, ref) => {
  const { addNewListItem, listItems, changeChekedList } = useList()
  const { changeReplacment, changeWord, wordState } = useCardchangeWords()
  const {keyReplacmentWordHandle, keySourceWordHandle} = useInputHandler()
  const replaceInputRef = React.useRef<HTMLDivElement>({} as HTMLDivElement )

  const sendWordUserChoise = () => {
    addNewListItem(wordState.word, wordState.replacmentWord)
    handleClose()
  }

  const createWord = (e: React.MouseEvent<HTMLButtonElement>) => {
    sendWordUserChoise()
  }

  return (
    <Card sx={style}>
      <CardContent>
        <div  className={'ModalHeader'}>

          <Typography variant="h5" component="div">
            Create word
          </Typography>

          <div className={'ModalHeader__closeButton'}>
            <CloseIcon onClick={handleClose} />
          </div>

        </div>

        <div onKeyDown={ (e) => {keySourceWordHandle(e,replaceInputRef.current.querySelector('input'))} } className={'modalForm'}>
          <div>
            <Typography variant="body2">
              the word you want to replace
            </Typography>
          </div>

          <div>
            <Input autoFocus = {true} onChange={changeWord} defaultValue={''} inputProps={ariaLabel} />
          </div>
        </div>

        <div onKeyDown={(e) => (keyReplacmentWordHandle(e, sendWordUserChoise))} className={'modalForm'}>
          <div>
            <Typography variant="body2">
              replacement word
            </Typography>
          </div>

          <div>
            <Input  ref = {replaceInputRef} onChange={changeReplacment} defaultValue={''} inputProps={ariaLabel} />
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

