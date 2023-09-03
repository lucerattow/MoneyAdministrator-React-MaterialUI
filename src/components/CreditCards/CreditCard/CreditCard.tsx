import React from 'react'
// recursos locales
// componentes
import {
  Grid,
  Typography,
  Button,
  Dialog,
  IconButton
} from '@mui/material'
import {
  ModalCreditCard,
  Modal,
  DialogCreditCardDelete
} from '@/components'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// assets
import mastercardLogo from "@/assets/logos/mastercard.svg"
import visaLogo from "@/assets/logos/visa.svg"
import hsbcLogo from "@/assets/logos/bank_hsbc.svg"
import chipImg from "@/assets/creditCard/chip.svg"
import contactlessImg from "@/assets/creditCard/contactless.svg"
// estilos
import styles from "./CreditCard.module.scss"

export const CreditCard = () => {
  const [dialogCreditCardDeleteShow, setDialogCreditCardDeleteShow] = React.useState<boolean>(false)
  const [modalShow, setModalShow] = React.useState<boolean>(false)

  const brandLogo = () => {
    return mastercardLogo
    // switch (brand) {
    //   case CreditCardBrand.Mastercard:
    //     return mastercardLogo
    //   case CreditCardBrand.Visa:
    //     return visaLogo
    // }
  }

  const handleDialogCreditCardOpen = () => setDialogCreditCardDeleteShow(true)

  const handleDialogCreditCardClose = () => setDialogCreditCardDeleteShow(false)

  const handleAddCreditCardClick = () => {
    setModalShow(true)
  }

  const handleCloseModalClick = () => setModalShow(false)

  return (
    <Grid className={styles.CreditCard} sx={{ padding: "20px" }} container direction="column" height={200}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" wrap="nowrap">
        <Grid className={styles.action_buttons} item>
          <IconButton size="small" onClick={handleAddCreditCardClick}>
            <EditOutlinedIcon />
          </IconButton>
          <IconButton size="small" color="error" onClick={handleDialogCreditCardOpen}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Grid>
        <img className={styles.BankLogo} src={hsbcLogo} alt="logo" />
      </Grid>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" mt={1}>
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
      <DialogCreditCardDelete
        open={dialogCreditCardDeleteShow}
        handleClose={handleDialogCreditCardClose}
      />
      <ModalCreditCard
        show={modalShow}
        onClose={handleCloseModalClick}
        mode="update"
      />
    </Grid>
  )
}

export default CreditCard