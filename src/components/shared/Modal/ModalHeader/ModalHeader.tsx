import React from 'react'
// recursos locales
// componentes
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// estilos
import styles from "./ModalHeader.module.scss"
import classNames from 'classnames';

export type ModalHeaderProps = {
  className?: string
  title?: string
  onClose?: () => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ className, title, onClose }) => {
  return (
    <Grid container className={classNames(className, styles.header)} justifyContent="space-between" alignItems="center">
      <Typography variant="body1">{title}</Typography>
      <IconButton size="small" onClick={() => onClose && onClose()}>
        <CloseRoundedIcon fontSize='small' />
      </IconButton>
    </Grid>
  )
}

export default ModalHeader