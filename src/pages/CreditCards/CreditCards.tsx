import React, { useEffect } from 'react'
import { mockCreditCards } from "@/interfaces"
// recursos locales
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

export type CreditCardsProps = {}

export const CreditCards = ({  }: CreditCardsProps) => {

  return (
    <PageContainer>
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
    </PageContainer>
  )
}

export default CreditCards