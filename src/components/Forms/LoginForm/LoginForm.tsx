import React, {useState, useEffect} from 'react'
import {useForm, Controller, SubmitHandler} from 'react-hook-form'
import {Link, useNavigate} from "react-router-dom"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
// componentes
import {
  Typography,
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
  Divider,
  Paper
} from '@mui/material'
import {
  LoadingButton
} from "@mui/lab"
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material'
import {AuthBackground} from '@/components'
// recursos locales
import { useAppContext } from '@/hooks'
import {userLogin, checkIsLogged} from "@/api"
// logica del componente
import {IFormInput, validationSchema} from "./LoginForm.Validations"

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { setUser } = useAppContext()
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  })

  const onClickShowPassword = () => setShowPassword(!showPassword)
  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true)
    const loggedUser = await userLogin(data.email, data.password)
    loggedUser && setUser(loggedUser)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        loading={loading}
        style={{ marginTop: '20px' }}
      >
        Iniciar sesión
      </LoadingButton>
    </form>
  )
}

export default LoginForm
