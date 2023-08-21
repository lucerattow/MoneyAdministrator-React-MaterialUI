import React, {useState} from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
// recursos locales
import { useAppContext } from '@/hooks'
import {userRegister, checkIsLogged} from "@/api"
// componentes
import {
  Typography,
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
  Paper
} from '@mui/material';
import {
  LoadingButton
} from "@mui/lab"
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import {AuthBackground} from '@/components';
// estilos
import styles from "./Register.module.scss"

// Definicion de tipos para los datos del formulario
interface IFormInput {
  email: string
  password: string
  confirmPassword: string
}

// Esquema de validación con yup
const schema = yup.object<IFormInput>().shape({
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

export const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { setUser } = useAppContext()
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onClickShowPassword = () => setShowPassword(!showPassword);
  const onClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true)
    const loggedUser = await userRegister(data.email, data.password)
    loggedUser && setUser(loggedUser);
    navigate("/")
  };

  return (
    <div className={styles.Container}>
      <Paper className={styles.LogIn}>
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
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
        <Typography component="p" mt={1}>
          Ya tienes una cuenta?
          {" "}
          <Typography className={styles.Link} component={Link} to="/" color="primary">inicia sesion!</Typography>
        </Typography>
      </Paper>
      <AuthBackground />
    </div>
  )
}

export default Register;