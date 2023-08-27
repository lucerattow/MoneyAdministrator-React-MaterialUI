// recursos locales
import { routeHome, routeTransactions, routeCreditCards } from "@/routes"
// componentes
import { Divider, List, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { LeftPanelButton } from '@/components';
// estilos
import styles from "./LeftPanel.module.scss"

export const LeftPanel = () => {
  return (
    <Paper className={styles.Container} >
      <List>
        <LeftPanelButton
          text="Dashboard"
          icon={<DashboardIcon />}
          to={routeHome}
        />
        <LeftPanelButton
          text="Transacciones"
          icon={<CurrencyExchangeIcon />}
          to={routeTransactions}
        />
        <Divider />
        <LeftPanelButton
          text="Tarjetas de credito"
          icon={<CreditCardIcon />}
          to={routeCreditCards}
        />
      </List>
    </Paper>
  )
}

export default LeftPanel