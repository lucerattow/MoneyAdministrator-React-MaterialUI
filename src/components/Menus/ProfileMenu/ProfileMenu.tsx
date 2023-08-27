import React from 'react'
import {useNavigate} from "react-router-dom"
// recursos locales
import {useAppContext} from '@/hooks'
import {userLogout} from '@/api'
// componentes
import {
  Menu,
  MenuItem,
  MenuProps
} from '@mui/material'
import {

} from "@mui/icons-material"

export type ProfileMenuProps = MenuProps & {
}

export const ProfileMenu = ({ anchorEl, id, transformOrigin, open, onClose, onClick }: ProfileMenuProps) => {
  const {setUser} = useAppContext()
  const navigate = useNavigate()

  const handleLoggout = () => {
    userLogout()
    setUser(null)
    navigate("/")
  }

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={id}
      keepMounted
      transformOrigin={transformOrigin}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={() => onClick}>Perfil</MenuItem>
      <MenuItem onClick={handleLoggout}>Cerrar sesión</MenuItem>
    </Menu>
  )
}

export default ProfileMenu