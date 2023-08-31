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
// assets
import mastercardLogo from "@/assets/logos/mastercard.svg"
import visaLogo from "@/assets/logos/visa.svg"
import hsbcLogo from "@/assets/logos/bank_hsbc.svg"
import chipImg from "@/assets/creditCard/chip.svg"
import contactlessImg from "@/assets/creditCard/contactless.svg"
// estilos
import styles from "./CreditCard.module.scss"

export const CreditCard = () => {
  const brandLogo = () => {
    return mastercardLogo
    // switch (brand) {
    //   case CreditCardBrand.Mastercard:
    //     return mastercardLogo
    //   case CreditCardBrand.Visa:
    //     return visaLogo
    // }
  }

  return (
    <Grid className={styles.CreditCard} sx={{ padding: "20px" }} container direction="column" height={200}>
      <Grid container direction="row" justifyContent="end">
        <img className={styles.BankLogo} src={hsbcLogo} alt="logo" />
      </Grid>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" mt={2}>
        <img className={styles.Chip} src={chipImg} alt="logo" />
        <img className={styles.BankLogo} src={contactlessImg} alt="logo" />
      </Grid>
      <Grid container direction="row" wrap='nowrap' justifyContent="space-between">
        <Grid container direction="column" justifyContent="center" alignItems="start">
          <Typography className={styles.Number}>
            **** **** **** 1234
          </Typography>
          <Typography className={styles.Name}>
            Lucas Ceratto
          </Typography>
        </Grid>
        <Grid container width={64} justifyContent="end" alignItems="end">
          <img className={styles.Logo} src={brandLogo()} alt="logo" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CreditCard