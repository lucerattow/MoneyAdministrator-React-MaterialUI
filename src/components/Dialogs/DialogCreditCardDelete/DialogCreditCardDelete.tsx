import React from 'react'
// recursos locales
// componentes
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
// estilos
import styles from "./DialogCreditCardDelete.module.scss"

export type DialogCreditCardDeleteProps = {
  className?: string
  open: boolean
  handleClose: () => void
}

export const DialogCreditCardDelete: React.FC<DialogCreditCardDeleteProps> = ({ className, open, handleClose }) => {
  const habldeSubmit = () => {
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit" autoFocus>
          Cancelar
        </Button>
        <Button onClick={habldeSubmit} color="error" variant='contained'>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogCreditCardDelete