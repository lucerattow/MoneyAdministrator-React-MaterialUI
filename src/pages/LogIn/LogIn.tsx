import React, {useState, useEffect} from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Link} from "react-router-dom"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppContext } from '@/hooks'
import {userLogin, checkIsLogged} from "@/api"

//componentes
import {
  Button,
  Typography,
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
  Divider,
  Paper
} from '@mui/material';
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import {AuthBackground} from '@/components';
import styles from "./LogIn.module.scss"

// Definicion de tipos para los datos del formulario
interface IFormInput {
  email: string;
  password: string;
}

// Esquema de validación con yup
const schema = yup.object<IFormInput>().shape({
  email: yup
    .string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es requerido'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
});

export const LogIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { setUser } = useAppContext()
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onClickShowPassword = () => setShowPassword(!showPassword);
  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const loggedUser = await userLogin(data.email, data.password)
    loggedUser && setUser(loggedUser);
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Iniciar sesión
          </Button>
        </form>
        <Typography component="p" mt={1} mb={1}>
          Olvidaste tu contraseña?
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography component="p" mt={1}>
          no tienes una cuenta?
          {" "}
          <Typography className={styles.Link} component={Link} to="/register" color="primary">registrate!</Typography>
        </Typography>
      </Paper>
      <AuthBackground />
    </div>
  )
}

export default LogIn;