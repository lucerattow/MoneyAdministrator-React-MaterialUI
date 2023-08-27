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
      <Controller
        name="displayName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl
            margin="dense"
            error={!!errors.displayName}
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="displayName">Nombre de usuario</InputLabel>
            <Input
              {...field}
              id="displayName"
              name="displayName"
              autoComplete="displayName"
              autoFocus
              error={!!errors.displayName}
              aria-describedby="displayName-error"
            />
            {!!errors.displayName && <FormHelperText id="displayName-error">{errors.displayName?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl
            margin="dense"
            error={!!errors.email}
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="email">Correo Electrónico</InputLabel>
            <Input
              {...field}
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              error={!!errors.email}
              aria-describedby="email-error"
            />
            {!!errors.email && <FormHelperText id="email-error">{errors.email?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl
            margin="dense"
            variant="standard"
            fullWidth
            error={!!errors.password}
          >
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input
              {...field}
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              autoComplete="current-password"
              aria-describedby="password-error"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    tabIndex={-1}
                    aria-label="toggle password visibility"
                    onClick={onClickShowPassword}
                    onMouseDown={onMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {!!errors.password && <FormHelperText id="password-error">{errors.password?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl
            margin="dense"
            variant="standard"
            fullWidth
            error={!!errors.confirmPassword}
          >
            <InputLabel htmlFor="confirmPassword">Confirmar Contraseña</InputLabel>
            <Input
              {...field}
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="current-password"
              aria-describedby="confirm-password-error"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    tabIndex={-1}
                    aria-label="toggle password visibility"
                    onClick={onClickShowConfirmPassword}
                    onMouseDown={onMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {!!errors.confirmPassword && <FormHelperText id="confirm-password-error">{errors.confirmPassword?.message}</FormHelperText>}
          </FormControl>
        )}
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