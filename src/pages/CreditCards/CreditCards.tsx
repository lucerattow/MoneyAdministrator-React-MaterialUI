import React from 'react'
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
import { CreditCardRow, PageHeader } from "@/components"
// estilos
import styles from "./CreditCards.module.scss"

export type CreditCardsProps = {}

export const CreditCards = ({  }: CreditCardsProps) => {
  const { setBreadcrumbItems } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbItems(["Tarjetas de credito"])
  }, [])

  return (
    <Paper>
      <PageHeader title='Tarjetas de Credito' />
      <Divider />
      <List>
        {/* boton: añadir tarjeta */}
        <ListItem>
          <Grid item width={280}>
            <Button
              variant="contained"
              fullWidth
            >
              Añadir tarjeta
            </Button>
          </Grid>
        </ListItem>
        <ListItem>
          <CreditCardRow />
        </ListItem>
        <ListItem>
          <CreditCardRow />
        </ListItem>
        <ListItem>
          <CreditCardRow />
        </ListItem>
      </List>
    </Paper>
  )
}

export default CreditCards