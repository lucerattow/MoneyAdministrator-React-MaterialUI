import React from 'react'
// componentes
import {
  Snackbar,
  Alert as MuiAlert,
  AlertProps,
  IconButton
} from "@mui/material"
import {
  CloseRounded
} from "@mui/icons-material"

export interface ToastProps {
  id: number
  handleClose: (id: number) => void
  message: string
  severity: AlertProps["severity"]
}

const Alert = (props: AlertProps) => {
  return (
    <MuiAlert elevation={6} variant="filled" {...props} />
  )
}

export const Toast = ({ id, handleClose, message, severity }: ToastProps) => {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={() => handleClose(id)}
      action={
        <IconButton size="small" color="inherit" onClick={() => handleClose(id)} >
          <CloseRounded fontSize="small" />
        </IconButton>
      }
    >
      <Alert onClick={() => handleClose(id)} severity={severity} >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Toast