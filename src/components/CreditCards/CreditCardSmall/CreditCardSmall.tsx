import React from 'react'
import { useNavigate } from 'react-router-dom';
// recursos locales
import { routeCreditCardDetails } from "@/routes"
import { CreditCardBrand, CreditCardDto } from '@/interfaces'
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
    <Button className={styles.CreditCard} fullWidth onClick={handleCreditCardClick} sx={{ padding: "20px" }}>
      <Grid container direction="row" wrap='nowrap' >
        <Grid container mr={2} width={64} justifyContent="center" alignItems="center">
          <img className={styles.Logo} src={brandLogo()} alt="logo" />
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="end">
          <Typography className={styles.Name}>
            HSBC
          </Typography>
          <Typography className={styles.Number}>
            **** **** **** 1234
          </Typography>
        </Grid>
      </Grid>
    </Button>
  )
}

export default CreditCardSmall