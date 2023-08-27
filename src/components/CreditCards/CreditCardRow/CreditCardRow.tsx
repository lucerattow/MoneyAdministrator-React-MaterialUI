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
import { CreditCard, CreditCardDetails } from "@/components"
import { CreditCardDto } from '@/interfaces'
// estilos

export type CreditCardRowProps = {
  creditCard: CreditCardDto
}

export const CreditCardRow = ({ creditCard }: CreditCardRowProps) => {
  return (
    <>
      <Grid item width={350}>
        <CreditCard />
      </Grid>
      <Grid item flex={1}>
        <CreditCardDetails />
      </Grid>
    </>
  )
}

export default CreditCardRow