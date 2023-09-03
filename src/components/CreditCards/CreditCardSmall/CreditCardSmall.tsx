import React from 'react'
import { useNavigate } from 'react-router-dom';
// recursos locales
import { routeCreditCardDetails } from "@/routes"
import { CreditCardBrand, CreditCardDto } from '@/interfaces'
// componentes
import {
  Grid,
  Typography,
  Button,
} from '@mui/material'
// assets
import mastercardLogo from "@/assets/logos/mastercard.svg"
import visaLogo from "@/assets/logos/visa.svg"
import hsbcLogo from "@/assets/logos/bank_hsbc.svg"
// estilos
import styles from "./CreditCardSmall.module.scss"

export const CreditCardSmall = () => {
  const navigate = useNavigate()
  const creditCardId = "1"

  const brandLogo = () => {
    return mastercardLogo
    // switch (brand) {
    //   case CreditCardBrand.Mastercard:
    //     return mastercardLogo
    //   case CreditCardBrand.Visa:
    //     return visaLogo
    // }
  }

  const handleCreditCardClick = () => {
    navigate(routeCreditCardDetails(creditCardId))
  }

  return (
    <Button className={styles.credit_card} fullWidth onClick={handleCreditCardClick} sx={{ padding: "15px" }}>
      <Grid container direction="column" justifyContent="space-between" height={64}>
        <Grid container direction="row" wrap="nowrap" justifyContent="space-between">
          <img className={styles.credit_card_logo} src={brandLogo()} alt="logo" />
          <img className={styles.credit_card_logo} src={hsbcLogo} alt="logo" />
        </Grid>
        <Grid container direction="row" wrap="nowrap" justifyContent="end">
          <Typography className={styles.credit_card_number}>**** **** **** 1234</Typography>
        </Grid>
      </Grid>
    </Button>
  )
}

export default CreditCardSmall