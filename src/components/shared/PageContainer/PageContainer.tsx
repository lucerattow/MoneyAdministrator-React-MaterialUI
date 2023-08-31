import React, { ReactNode } from 'react'
import classNames from 'classnames'
// recursos locales
// componentes
// estilos
import styles from "./PageContainer.module.scss"

export type PageContainerProps = {
  className?: string
  children: ReactNode
}

export const PageContainer = ({ className, children }: PageContainerProps) => {
  return (
    <div className={classNames(className, styles.page)}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default PageContainer