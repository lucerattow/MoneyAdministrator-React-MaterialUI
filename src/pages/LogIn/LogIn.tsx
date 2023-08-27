import { Link } from "react-router-dom"
// recursos locales
import { routeRegister } from "@/routes"
// componentes
import { Typography, Divider, Paper } from '@mui/material'
import { AuthBackground, LoginForm } from '@/components'
// estilos
import styles from "./LogIn.module.scss"

export const LogIn = () => {
  return (
    <div className={styles.Container}>
      <Paper className={styles.LogIn}>
        <LoginForm />
        <Typography component="p" mt={1} mb={1}>
          Olvidaste tu contraseña?
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography component="p" mt={1}>
          no tienes una cuenta?
          {" "}
          <Typography className={styles.Link} component={Link} to={routeRegister} color="primary">registrate!</Typography>
        </Typography>
      </Paper>
      <AuthBackground />
    </div>
  )
}

export default LogIn