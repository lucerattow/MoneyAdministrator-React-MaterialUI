import React from 'react'
// recursos locales
// componentes
import MuiModal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ModalHeader } from "@/components"
// estilos
import styles from "./Modal.module.scss"

export type ModalProps = {
  className?: string
  show: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ className, show, title, onClose, children }) => {
  return (
    <MuiModal
      className={className}
      open={show}
      onClose={onClose}
    >
      <Box className={styles.modal}>
        <ModalHeader title={title} onClose={onClose} />
        <Divider />
        {children}
      </Box>
    </MuiModal>
  )
}

export default Modal