// recursos locales
import {useAppContext} from '@/hooks';
import {userLogout} from '@/api';
// componentes
import {
  Box,
  Button,
  Typography
} from '@mui/material';
import {
  Notifications,
  NotificationsActive,
  CloseRounded
} from "@mui/icons-material"
// estilos
import styles from "./Header.module.scss"

export const Header = () => {
  const { setNotificationPanelShow, setUser } = useAppContext();

  const onNotificationsClick = () =>
    setNotificationPanelShow((prevState) => !prevState)

  const loggout = () => {
    userLogout()
    setUser(null)
  }

  return (
    <Box className={styles.Header} bgcolor="background.paper">
      <Typography variant="h4">
        Money Administrator
      </Typography>
      <Box>
        <Button className={styles.ButtonWhite} onClick={loggout}>
          <CloseRounded sx={{ fontSize: 30}} />
        </Button>
        <Button className={styles.ButtonWhite} onClick={onNotificationsClick}>
          <Notifications sx={{ fontSize: 30}} />
        </Button>
      </Box>
    </Box>
  )
}

export default Header
