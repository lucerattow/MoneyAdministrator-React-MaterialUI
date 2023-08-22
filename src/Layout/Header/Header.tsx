import {useState} from "react"
// recursos locales
import {useAppContext} from '@/hooks'
import {userLogout} from '@/api'
// componentes
import {
  AppBar,
  IconButton,
  Box,
  Button,
  Typography,
  Avatar,
  Badge,
  Toolbar
} from '@mui/material'
import {
  Notifications,
  NotificationsActive,
  Menu,
  More,
  CloseRounded
} from "@mui/icons-material"
import {ProfileMenu} from "@/components"
// estilos
import styles from "./Header.module.scss"

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {setNotificationPanelShow, user} = useAppContext();

  const menuId = 'primary-search-account-menu';

  const isMenuOpen = Boolean(anchorEl);

  const handleNotificationsOpen = () =>
    setNotificationPanelShow((prevState) => !prevState)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //className={styles.Header} bgcolor="background.paper"
  return (
    <Box className={styles.Header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Money Administrator
          </Typography>
          <Box sx={{flexGrow: 1}} />
          <Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Notifications onClick={handleNotificationsOpen} />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{height: 35, width: 35 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {!!user &&
          <ProfileMenu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        />
      }
    </Box>
  )
}

export default Header
