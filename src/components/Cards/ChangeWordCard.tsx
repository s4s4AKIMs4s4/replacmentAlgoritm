import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/card.css'
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import { IChangeWord } from '../../models';
import useList from '../../hooks/useList';
import useCardchangeWords from '../../hooks/useCardchangeWords';
import useInputHandler from '../../hooks/useInputHandler';
import React from 'react';
const ariaLabel = { 'aria-label': 'description' };

const ChangeWordCard = React.forwardRef<unknown, IChangeWord>((props, ref) => {
  const {changeListItem } = useList()
  const { changeReplacment, changeWord, wordState, setWordState } = useCardchangeWords()
  const { keyReplacmentWordHandle, keySourceWordHandle } = useInputHandler()
  const replaceInputRef = React.useRef<HTMLDivElement>({} as HTMLDivElement)

  const sendChangeWord = () => {
    const word = wordState.word || props.word
    const replacmentWord = wordState.replacmentWord || props.replacmentWord
    changeListItem(props.wordKey, word, replacmentWord)
    props.handleClose()
  }
  const changeWordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    sendChangeWord()
  }

  return (
    <Card sx={style}>
      <CardContent>
        <div className={'ModalHeader'}>

          <Typography variant="h5" component="div">
            Change Word
          </Typography>

          <div className={'ModalHeader__closeButton'}>
            <CloseIcon onClick={props.handleClose} />
          </div>

        </div>

        <div onKeyDown={ (e) => {keySourceWordHandle(e,replaceInputRef.current.querySelector('input'))} } className={'modalForm'}>
          <div>
            <Typography variant="body2">
              The word you want to replace
            </Typography>
          </div>

          <div>
            <Input autoFocus = {true}  onChange={changeWord} defaultValue={props.word} inputProps={ariaLabel} />
          </div>
        </div>

        <div onKeyDown={(e) => (keyReplacmentWordHandle(e, sendChangeWord))} className={'modalForm'}>
          <div>
            <Typography variant="body2">
              Replacement word
            </Typography>
          </div>

          <div>
            <Input ref={replaceInputRef} onChange={changeReplacment} defaultValue={props.replacmentWord} inputProps={ariaLabel} />
          </div>
        </div>

      </CardContent>

      <CardActions>
        <Button onClick={changeWordHandler} size="small">Change</Button>
      </CardActions>
    </Card>
  );
})
ChangeWordCard.displayName = "ChangeWordCard";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 275
};

export default React.memo(ChangeWordCard)

