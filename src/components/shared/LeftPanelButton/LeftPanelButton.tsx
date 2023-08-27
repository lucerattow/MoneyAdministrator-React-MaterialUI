import React, {useState} from 'react'
// recursos locales
import {useNavigate, useLocation} from 'react-router-dom';
// componentes
import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
} from "@mui/icons-material"
// estilos

export type LeftPanelButtonProps = {
  text: string
  icon: React.ReactNode
  to: string
}

export const LeftPanelButton = ({text, icon, to}: LeftPanelButtonProps) => {

  const navigate = useNavigate()
  const location = useLocation();

  const isSelected = () => {
    if (to === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(to)
  }

  const handleNavigate = () => navigate(to)

  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
      }}
      onClick={handleNavigate}
      selected={isSelected()}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: 3,
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}

export default LeftPanelButton