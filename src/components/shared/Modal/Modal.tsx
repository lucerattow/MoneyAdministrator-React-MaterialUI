import React from 'react'
// recursos locales
// componentes
import { Divider, Box, Modal as MuiModal } from '@mui/material';
import { ModalHeader } from "@/components"
// estilos
import styles from "./Modal.module.scss"

export type ModalProps = {
  className?: string
  show: boolean
  onClose: () => void
  title: string
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
        <Box className={styles.container}>
          {children}
        </Box>
      </Box>
    </MuiModal>
  )
}

export default Modal