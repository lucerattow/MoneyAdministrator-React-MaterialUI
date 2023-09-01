import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
// recursos locales
import { routeHome } from "@/routes"
import { useAppContext } from '@/hooks'
import { userRegister } from "@/api"
// componentes
import {
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  LoadingButton
} from "@mui/lab"
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import {
  InputText,
  InputPassword
} from "@/components"
// logica del componente
import { IFormInput, validationSchema } from "./RegisterForm.Validations"

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { setUser } = useAppContext()
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onClickShowPassword = () => setShowPassword(!showPassword);
  const onClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true)
    const loggedUser = await userRegister(data.email, data.password, data.displayName)
    if (loggedUser) {
      setUser(loggedUser)
      navigate(routeHome)
    }
    setLoading(false)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name="displayName"
        label="Nombre de usuario"
        control={control}
        errors={errors}
        autoComplete="email"
        autoFocus
      />
      <InputText
        name="email"
        label="Correo Electrónico"
        control={control}
        errors={errors}
        autoComplete="email"
      />
      <InputPassword
        name="password"
        label="Contraseña"
        control={control}
        errors={errors}
        autoComplete="current-password"
      />
      <InputPassword
        name="confirmPassword"
        label="Confirmar Contraseña"
        control={control}
        errors={errors}
        autoComplete="confirm-password-error"
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        loading={loading}
        style={{ marginTop: '20px' }}
      >
        Registrarse
      </LoadingButton>
    </form>
  )
}

export default RegisterForm