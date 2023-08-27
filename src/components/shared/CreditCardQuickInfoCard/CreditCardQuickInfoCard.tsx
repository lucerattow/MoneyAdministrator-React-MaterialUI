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
import { CreditCard } from "@/components"
import { CreditCardDto } from '@/interfaces'
// estilos

export type CreditCardQuickInfoCardProps = {
  creditCard: CreditCardDto
}

export const CreditCardQuickInfoCard = ({ creditCard }: CreditCardQuickInfoCardProps) => {
  useEffect(() => {
    console.log("se renderizo")
  }, [])

  return (
    <>
      <Grid item width={350}>
        <CreditCard creditCard={creditCard} />
      </Grid>
      <h2>Info de la tarjeta</h2>
    </>
  )
}

export default CreditCardQuickInfoCard