import React from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
import {
  Grid,
  Divider,
  Paper,
  Button,
  List,
  ListItem,
} from '@mui/material'
import { CreditCardRow, PageHeader, ModalCreditCard } from "@/components"
// estilos
import styles from "./CreditCards.module.scss"

export type CreditCardsProps = {}

export const CreditCards = ({ }: CreditCardsProps) => {
  const [modalCreditCardShow, setModalCreditCardShow] = React.useState<boolean>(false)
  const { setBreadcrumbItems } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbItems(["Tarjetas de credito"])
  }, [])

  const handleModalCreditCardOpen = () => setModalCreditCardShow(true)

  const handleModalCreditCardClose = () => setModalCreditCardShow(false)

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
              onClick={handleModalCreditCardOpen}
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
      <ModalCreditCard
        show={modalCreditCardShow}
        onClose={handleModalCreditCardClose}
        mode="insert"
      />
    </Paper>
  )
}

export default CreditCards