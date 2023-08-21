import * as yup from 'yup';

// Definicion de tipos para los datos del formulario
export interface IFormInput {
  email: string
  password: string
  confirmPassword: string
}

// Esquema de validación con yup
export const validationSchema = yup.object<IFormInput>().shape({
  email: yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(/[a-z]/, 'La contraseña debe contener al menos un carácter en minúscula')
    .required('La contraseña es requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es obligatoria')
});