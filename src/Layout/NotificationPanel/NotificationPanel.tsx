import { useAppContext } from '@/hooks';
import classNames from "classnames"
//Componentes
import {
  Paper,
  Box,
  Button,
  Divider
} from '@mui/material';
import {
  CloseRounded
} from "@mui/icons-material"
//Estilos
import styles from "./NotificationPanel.module.scss"

interface NotificationPanelProps {
  show: boolean;
}

export const NotificationPanel = ({ show }: NotificationPanelProps) => {
  const {setNotificationPanelShow} = useAppContext();

  const onNotificationsClick = () =>
    setNotificationPanelShow((prevState) => !prevState)

  return (
    <Paper className={classNames([
      styles.NotificationPanel,
      show ? styles.Show : ""
    ])} >
      <Box className={styles.NotificationPanel_Header}>
        <h2>Notificaciones</h2>
        <Button className={styles.ButtonWhite} onClick={onNotificationsClick}>
          <CloseRounded sx={{ fontSize: 30 }} />
        </Button>
      </Box>
      <Divider />
    </Paper>
  )
}

export default NotificationPanel
