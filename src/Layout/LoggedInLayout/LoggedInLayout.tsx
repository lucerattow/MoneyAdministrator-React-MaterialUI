import {ReactNode} from 'react'
import {useAppContext} from '@/hooks';
// componentes
import {Header} from "@/Layout"
import {NotificationPanel} from "@/Layout"
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
        {/* <Routes>
          <Route path="/auth" element={<LeftMenu />} />
          <Route path="/auth/register" element={<LeftMenu />} />
        </Routes>
        <LeftMenu /> */}
        {children}
      </div>
      <NotificationPanel show={notificationPanelShow} />
    </div>
  );
}

export default LoggedInLayout