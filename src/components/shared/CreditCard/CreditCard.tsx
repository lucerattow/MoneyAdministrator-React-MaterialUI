import React from 'react'
// recursos locales
import { CreditCardBrand, CreditCardDto } from '@/interfaces'
// componentes
import {
  Grid,
  Typography,
  Paper,
  Button
} from '@mui/material'
// assets
import mastercardLogo from "@/assets/svg/mastercard.svg"
import visaLogo from "@/assets/svg/visa.svg"
// estilos
import styles from "./CreditCard.module.scss"

export type CreditCardProps = {
  creditCard: CreditCardDto
}

export const CreditCard = ({ creditCard: { brand, lastNumbers } }: CreditCardProps) => {
  console.log(styles)
  const brandLogo = () => {
    switch (brand) {
      case CreditCardBrand.Mastercard:
        return mastercardLogo
      case CreditCardBrand.Visa:
        return visaLogo
    }
  }

  return (
    <Button className={styles.CreditCard} fullWidth>
      <Grid container direction="row" wrap='nowrap'>
        <Grid item mr={2}>
          <img className={styles.Logo} src={brandLogo()} alt="logo" />
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="start">
          <Typography className={styles.Number}>
            **** **** **** {lastNumbers}
          </Typography>
          <Typography className={styles.Name}>
            Lucas Ceratto
          </Typography>
        </Grid>
        <Button>D</Button>
      </Grid>
    </Button>
  )
}

export default CreditCard