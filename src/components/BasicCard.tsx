import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/card.css'
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import { IWordCard } from '../models';

const ariaLabel = { 'aria-label': 'description' };

const  WordCard:React.FC<IWordCard> = ( {handleClose,replacmentWord,word}) => {
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
            <Input defaultValue={word} inputProps={ariaLabel} />
          </div>
          </div>

          <div  className={'modalForm'}>
            <div>
              <Typography variant="body2">
                replacement word
              </Typography>
            </div>
            
            <div>
              <Input defaultValue={replacmentWord} inputProps={ariaLabel} />
            </div>
        </div>

      </CardContent>

      <CardActions>
        <Button onClick={handleClose} size="small">Create</Button>
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

export default WordCard

