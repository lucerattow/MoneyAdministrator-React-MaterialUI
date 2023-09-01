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
  ButtonGroup,
} from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
  CreditCard,
  CreditCardDetails as CreditCardDetailsComponent,
  SummaryList,
  TableCreditCardPayments,
  TableCreditCardSummaryDetails,
  PageHeader
} from '@/components'
// estilos
import styles from "./CreditCardDetails.module.scss"

export const CreditCardDetails = () => {
  const { setBreadcrumbItems } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbItems(["Tarjetas de credito", "Información de la tarjeta"])
  }, [])

  return (
    <Paper>
      <PageHeader title='Información de la tarjeta' buttonBack />
      <Divider />
      <Grid container direction="row" wrap="nowrap" pt={1} pb={1} pl={2} pr={2}>
        {/* Columna Izquierda */}
        <Grid container width={350} direction="column">
          <CreditCard />
          <ButtonGroup className={styles.summary_buttons}>
            <Button
              variant="contained"
              fullWidth
              endIcon={<UploadFileIcon />}
            >Importar</Button>
            <Button
              variant="contained"
              fullWidth
              endIcon={<AddCircleOutlineOutlinedIcon />}
            >Crear</Button>
          </ButtonGroup>
          <SummaryList className={styles.summary_list} />
        </Grid>
        {/* Columna Derecha */}
        <Grid container flex={1} direction="column" ml={2}>
          <CreditCardDetailsComponent />
          <div className={styles.summary_tables}>
            <Typography>Pagos registrados</Typography>
            <TableCreditCardPayments />
          </div>
          <div className={styles.summary_tables}>
            <Typography>Detalles del resumen</Typography>
            <TableCreditCardSummaryDetails />
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CreditCardDetails