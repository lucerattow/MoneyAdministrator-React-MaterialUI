import React from 'react'
// recursos locales
// componentes
import {
  Grid,
  Typography,
  Paper,
  Button,
  ButtonGroup
} from '@mui/material'
// estilos
import styles from "./CreditCardDetails.module.scss"

export const CreditCardDetails = () => {
  return (
    <Grid container direction="row" wrap="nowrap" justifyContent="space-between" alignItems="space-between" height={85}>
      {/* Fechas */}
      <Grid container direction="row" wrap="nowrap" md={6}>
        {/* Fecha cierre, Vencimiento */}
        <Grid container direction="column" justifyContent="space-between" md={3} mr={2}>
          <Grid container direction="column" wrap="nowrap">
            <Typography className={ styles.PropTitle }>Fecha de cierre</Typography>
            <Typography>--/--/----</Typography>
          </Grid>
          <Grid container direction="column" wrap="nowrap">
            <Typography className={ styles.PropTitle }>Vencimiento</Typography>
            <Typography>--/--/----</Typography>
          </Grid>
        </Grid>
        {/* Prox Cierre, Prox Vto */}
        <Grid container direction="column" justifyContent="space-between" mr={2} md={3}>
          <Grid container direction="column" wrap="nowrap">
            <Typography className={ styles.PropTitle }>Proximo cierre</Typography>
            <Typography>--/--/----</Typography>
          </Grid>
          <Grid container direction="column" wrap="nowrap">
            <Typography className={ styles.PropTitle }>Proximo Vto</Typography>
            <Typography>--/--/----</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Totales, Minimo, Restante */}
      <Grid container direction="row" wrap="nowrap" md={6}>
        {/* Total Ars, Saldo pendiente */}
        <Grid container direction="column" justifyContent="space-between" ml={2} md={6}>
          <Grid container direction="column">
            <Typography className={styles.PropTitle}>Total ARS</Typography>
            <Grid container direction="row" justifyContent="space-between">
              <Typography>$</Typography>
              <Typography>0,00</Typography>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Typography className={styles.PropTitle}>Saldo pendiente</Typography>
            <Grid container direction="row" justifyContent="space-between">
              <Typography>$</Typography>
              <Typography>0,00</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Total Usd, pago minimo */}
        <Grid container direction="column" justifyContent="space-between" ml={2} md={6}>
          <Grid container direction="column">
            <Typography className={styles.PropTitle}>Total USD</Typography>
            <Grid container direction="row" justifyContent="space-between">
              <Typography>U$D</Typography>
              <Typography>0,00</Typography>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Typography className={styles.PropTitle}>Pago minimo</Typography>
            <Grid container direction="row" justifyContent="space-between">
              <Typography>$</Typography>
              <Typography>0,00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreditCardDetails