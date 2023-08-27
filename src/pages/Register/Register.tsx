import { Link } from "react-router-dom"
// recursos locales
import { routeHome } from "@/routes"
// componentes
import { Typography, Paper } from '@mui/material';
import { AuthBackground, RegisterForm } from '@/components';
// estilos
import styles from "./Register.module.scss"

export const Register = () => {
  return (
    <div className={styles.Container}>
      <Paper className={styles.LogIn}>
        <RegisterForm />
        <Typography component="p" mt={1}>
          Ya tienes una cuenta?
          {" "}
          <Typography className={styles.Link} component={Link} to={routeHome} color="primary">inicia sesion!</Typography>
        </Typography>
      </Paper>
      <AuthBackground />
    </div>
  )
}

export default Register;