import React, { useEffect } from 'react'
// recursos locales
// componentes
import {
  Grid,
  Divider,
  Typography,
  Paper,
  Button,
} from '@mui/material'
import { CreditCardSmall, CreditCardDetails } from "@/components"
import { CreditCardDto } from '@/interfaces'
// estilos
import styles from "./SummaryList.module.scss"

export const CreditCardRow = () => {
  return (
    <Grid container direction="row" wrap="nowrap">
      <Grid item width={280}>
        <CreditCardSmall />
      </Grid>
      <Grid item flex={1} ml={2}>
        <CreditCardDetails />
      </Grid>
    </Grid>
  )
}

export default CreditCardRow