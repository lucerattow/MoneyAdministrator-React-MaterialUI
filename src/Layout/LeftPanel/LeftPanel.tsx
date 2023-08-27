import React, {useState} from 'react'
// recursos locales
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
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { LeftPanelButton } from '@/components';
// estilos
import styles from "./LeftPanel.module.scss"

export const LeftPanel = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  }

  return (
    <Paper className={styles.Container} >
      <List>
        <LeftPanelButton
          text="Dashboard"
          icon={<DashboardIcon />}
          to="/"
          onClick={() => handleListItemClick(1)}
          selected={selectedIndex === 1}
        />
        <LeftPanelButton
          text="Transacciones"
          icon={<CurrencyExchangeIcon />}
          to="/transactions"
          onClick={() => handleListItemClick(2)}
          selected={selectedIndex === 2}
        />
        <Divider />
        <LeftPanelButton
          text="Tarjetas de credito"
          icon={<CreditCardIcon />}
          to="/credit-cards"
          onClick={() => handleListItemClick(3)}
          selected={selectedIndex === 3}
        />
      </List>
    </Paper>
  )
}

export default LeftPanel