import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// componentes
import {
  Modal,
  Box,
  Divider,
  Grid
} from '@mui/material'
import { LoadingButton } from "@mui/lab"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FaceIcon from '@mui/icons-material/Face';
import { InputText, InputMasked, InputSelect, InputSelectItems, ModalHeader } from "@/components"
// logica del componente
import { ModalCreditCardAddInput, validationSchema } from "./ModalCreditCard.validations"
// assets
import masterCardLogo from "@/assets/logos/mastercard.svg"
import visaLogo from "@/assets/logos/visa.svg"
import hsbcLogo from "@/assets/logos/bank_hsbc_small.svg"
import supervielleLogo from "@/assets/logos/bank_supervielle_small.svg"
// estilos
import styles from "./ModalCreditCard.module.scss"

export type ModalCreditCardProps = {
  className?: string
  show: boolean
  onClose: () => void
  mode: "insert" | "update"
}

const brandSelect: InputSelectItems[] = [
  {
    value: "masterCard",
    label: "MasterCard",
    imgSrc: masterCardLogo
  },
  {
    value: "visa",
    label: "Visa",
    imgSrc: visaLogo
  }
]

const issuingBankSelect: InputSelectItems[] = [
  {
    value: "hsbc",
    label: "HSBC",
    imgSrc: hsbcLogo
  },
  {
    value: "supervielle",
    label: "Supervielle",
    imgSrc: supervielleLogo
  }
]

export const ModalCreditCard: React.FC<ModalCreditCardProps> = ({ className, show, onClose, mode }) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const { control, handleSubmit, formState: { errors } } = useForm<ModalCreditCardAddInput>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ModalCreditCardAddInput> = async (data) => {
    setLoading(true)
    // const loggedUser = await userLogin(data.email, data.password)
    // if (loggedUser) {
    //   setUser(loggedUser)
    //   navigate(routeHome)
    // }
    setLoading(false)
  }

  return (
    <Modal
      className={className}
      open={show}
      onClose={onClose}
    >
      <Box className={styles.modal}>
        <ModalHeader title={(mode === "insert" ? "Nueva" : "Modificar") + " tarjeta de credito"} onClose={onClose} />
        <Divider />
        <Box className={styles.container}>
          <form className={styles.form}>
            <Grid container direction="row" wrap="nowrap" alignItems="end">
              <InputSelect
                name="brandName"
                label="Marca"
                control={control}
                errors={errors}
                autoComplete=""
                items={brandSelect}
              />
              <InputSelect
                className={styles.input_numbers}
                name="issuingBank"
                label="Banco emisor"
                control={control}
                errors={errors}
                autoComplete=""
                items={issuingBankSelect}
              />
            </Grid>
            <InputMasked
              mask={['*', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', /\d/, /\d/, /\d/, /\d/]}
              name="numbers"
              label="Ultimos 4 numeros"
              control={control}
              errors={errors}
              autoComplete=""
              icon={<CreditCardIcon />}
            />
            <InputText
              name="cardHolder"
              label="Titular de la tarjeta"
              control={control}
              errors={errors}
              autoComplete=""
              icon={<FaceIcon />}
            />
            <LoadingButton
              className={styles.button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              loading={loading}
            >
              {mode === "insert" ? "Guardar tarjeta" : "Actualizar tarjeta"}
            </LoadingButton>
          </form>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalCreditCard