import { ReactNode } from 'react'
// recursos locales
import { useAppContext } from '@/hooks';
// componentes
import { Header } from "@/Layout"
import { NotificationPanel, LeftPanel } from "@/Layout"
// estilos
import styles from "./LoggedInLayout.module.scss"

interface LoggedInLayoutProps {
  children: ReactNode;
}

export const LoggedInLayout = ({ children }: LoggedInLayoutProps) => {
  const {notificationPanelShow} = useAppContext();

  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Container}>
        <LeftPanel />
        {children}
      </div>
      <NotificationPanel show={notificationPanelShow} />
    </div>
  );
}

export default LoggedInLayout