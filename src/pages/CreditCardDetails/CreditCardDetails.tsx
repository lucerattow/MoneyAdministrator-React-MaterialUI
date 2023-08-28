import React, { useEffect } from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
import {
  Grid,
  Divider,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
} from '@mui/material'
// estilos

export type CreditCardDetailsProps = {}

export const CreditCardDetails = ({  }: CreditCardDetailsProps) => {
  const { setBreadcrumbItems } = useAppContext()

  useEffect(() => {
    setBreadcrumbItems(["Tarjetas de credito", "Información de la tarjeta"])
  }, [])

  return (
    <Paper>
      <Grid container padding={2}>
        <Typography variant="h5">Información de la tarjeta</Typography>
      </Grid>
      <Divider />
      <Grid container>

      </Grid>
    </Paper>
  )
}

export default CreditCardDetails