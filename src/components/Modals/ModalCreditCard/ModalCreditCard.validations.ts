import * as yup from 'yup';

// Definicion de tipos para los datos del formulario
export interface ModalCreditCardAddInput {
  numbers: string
  brandName: string
  issuingBank: string
  cardHolder: string
}

// Esquema de validación con yup
export const validationSchema = yup.object<ModalCreditCardAddInput>().shape({
  numbers: yup.string().required(),
  brandName: yup.string().required(),
  issuingBank: yup.string().required(),
  cardHolder: yup.string().required(),
});