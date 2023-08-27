import { useState } from "react"
// recursos locales
import { useAppContext } from '@/hooks'
// componentes
import {
  AppBar,
  IconButton,
  Box,
  Typography,
  Avatar,
  Badge,
  Toolbar
} from '@mui/material'
import {
  Notifications,
  NotificationsActive,
} from "@mui/icons-material"
import { ProfileMenu } from "@/components"
// estilos
import styles from "./Header.module.scss"

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {setNotificationPanelShow, user} = useAppContext();

  const menuId = 'profile-menu';

  const isMenuOpen = Boolean(anchorEl);

  const handleNotificationsOpen = () =>
    setNotificationPanelShow((prevState) => !prevState)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.Header}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Money Administrator
          </Typography>
          <Box sx={{flexGrow: 1}} />
          {user && (
            <Typography
              ml={1}
              mr={1}
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              {user.displayName}
            </Typography>
          )}
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
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Notifications onClick={handleNotificationsOpen} />
            </Badge>
          </IconButton>
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
