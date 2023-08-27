import React, { ReactNode } from 'react'
// recursos locales
// componentes
// estilos
import styles from "./PageContainer.module.scss"

export type PageContainerProps = {
  children: ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className={styles.PageContainer}>
      {children}
    </div>
  )
}

export default PageContainer