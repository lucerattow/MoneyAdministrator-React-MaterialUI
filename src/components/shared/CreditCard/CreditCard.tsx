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
import mastercardLogo from "@/assets/svg/mastercard.svg"
import visaLogo from "@/assets/svg/visa.svg"
// estilos
import styles from "./CreditCard.module.scss"

export type CreditCardProps = {
}

export const CreditCard = () => {
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
    <Button className={styles.CreditCard} fullWidth onClick={handleCreditCardClick}>
      <Grid container direction="row" wrap='nowrap'>
        <Grid container mr={2} width={64} justifyContent="center" alignItems="center">
          <img className={styles.Logo} src={brandLogo()} alt="logo" />
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="start">
          <Typography className={styles.Number}>
            **** **** **** 1234
          </Typography>
          <Typography className={styles.Name}>
            Lucas Ceratto
          </Typography>
        </Grid>
      </Grid>
    </Button>
  )
}

export default CreditCard