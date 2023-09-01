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
import { CreditCardRow, PageHeader, Modal, FormCreditCardAdd } from "@/components"
// estilos
import styles from "./CreditCards.module.scss"

export type CreditCardsProps = {}

export const CreditCards = ({ }: CreditCardsProps) => {
  const [modalShow, setModalShow] = React.useState<boolean>(false)
  const [modalTitle, setModalTitle] = React.useState<string>("")
  const [modalContent, setModalContent] = React.useState<React.ReactNode>(undefined)
  const { setBreadcrumbItems } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbItems(["Tarjetas de credito"])
  }, [])

  const handleAddCreditCardClick = () => {
    setModalTitle("Nueva tarjeta de credito")
    setModalContent(<FormCreditCardAdd />)
    setModalShow(true)
  }

  const handleCloseModalClick = () => setModalShow(false)

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
              onClick={handleAddCreditCardClick}
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
      <Modal
        show={modalShow}
        onClose={handleCloseModalClick}
        title={modalTitle}
      >
        {modalContent}
      </Modal>
    </Paper>
  )
}

export default CreditCards