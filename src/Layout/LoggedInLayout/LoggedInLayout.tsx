import { ReactNode } from 'react'
// recursos locales
import { useAppContext } from '@/hooks';
// componentes
import { Header } from "@/Layout"
import { NotificationPanel, LeftPanel } from "@/Layout"
import { Breadcrumbs, PageContainer } from "@/components"
// estilos
import styles from "./LoggedInLayout.module.scss"

export type LoggedInLayoutProps = React.HTMLProps<HTMLDivElement> & {
  children: ReactNode;
}

export const LoggedInLayout = ({ children, ...divProps }: LoggedInLayoutProps) => {
  const {notificationPanelShow} = useAppContext();

  return (
    <div {...divProps} className={styles.layout}>
      <Header />
      <div className={styles.layout_container}>
        <LeftPanel className={styles.layout_leftpanel} />
        <div className={styles.layout_scroll}>
          <PageContainer className={styles.layout_page}>
            <Breadcrumbs />
            {children}
          </PageContainer>
        </div>
      </div>
      <NotificationPanel show={notificationPanelShow} />
    </div>
  );
}

export default LoggedInLayout