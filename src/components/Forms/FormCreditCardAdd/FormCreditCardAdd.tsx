import React from 'react'
// recursos locales
// componentes
import {
  Grid,
  Divider,
  Paper,
  Button,
  List,
  ListItem,
} from '@mui/material'
// estilos
import styles from "./FormCreditCardAdd.module.scss"

export type FormCreditCardAddProps = {
  className?: string
}

export const FormCreditCardAdd: React.FC<FormCreditCardAddProps> = ({ className }) => {
  return (
    <Grid className={className}>
      FormCreditCardAdd
    </Grid>
  )
}

export default FormCreditCardAdd