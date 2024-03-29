import { FC } from "react";
import { Modal } from '@mui/material';
import { IModal } from '../../models';

const CreateNewWorldModal:FC<IModal> = ({handleClose, open, children}) => {
  return <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
      { children }
    </Modal>
  </>  
}


export default CreateNewWorldModal

