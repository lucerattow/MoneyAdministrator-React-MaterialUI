import { ReactNode } from 'react'
import { useAppContext } from '@/hooks';
// componentes
import { Header } from "@/Layout"
import { NotificationPanel } from "@/Layout"
// estilos
import styles from "./LoggedOutLayout.module.scss"

interface LoggedOutLayoutProps {
  children: ReactNode;
}

export const LoggedOutLayout = ({ children }: LoggedOutLayoutProps) => {
  const {notificationPanelShow} = useAppContext();

  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Container}>
        {children}
      </div>
      <NotificationPanel show={notificationPanelShow} />
    </div>
  );
}

export default LoggedOutLayout