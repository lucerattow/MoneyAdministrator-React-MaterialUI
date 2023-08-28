import React, { useEffect } from 'react'
// recursos locales
import { mockCreditCards } from "@/interfaces"
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
import { PageContainer, CreditCardRow } from "@/components"
// estilos
import styles from "./CreditCards.module.scss"
import { FirstPage } from '@mui/icons-material'

export type CreditCardsProps = {}

export const CreditCards = ({  }: CreditCardsProps) => {
  const { setBreadcrumbItems } = useAppContext()

  useEffect(() => {
    setBreadcrumbItems(["Tarjetas de credito"])
  }, [])

  return (
    <Paper>
      <Grid container padding={2}>
        <Typography variant="h5">Tarjetas de Credito</Typography>
      </Grid>
      <Divider />
      <List>
        {/* boton: añadir tarjeta */}
        <ListItem>
          <Grid item width={350}>
            <Button
              variant="contained"
              fullWidth
            >
              Añadir tarjeta
            </Button>
          </Grid>
        </ListItem>
        {mockCreditCards.map((creditCard) => (
          <ListItem>
            <CreditCardRow creditCard={creditCard} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default CreditCards