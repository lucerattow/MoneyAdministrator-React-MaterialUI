import React, {useState} from 'react'
// recursos locales
import {useNavigate} from 'react-router-dom';
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
  onClick?: () => void;
  selected?: boolean
}

export const LeftPanelButton = ({text, icon, to, onClick, selected = false}: LeftPanelButtonProps) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(to)
    onClick && onClick()
  }

  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
      }}
      onClick={handleNavigate}
      selected={selected}
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