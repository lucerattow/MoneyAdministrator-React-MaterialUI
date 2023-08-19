import React, {ReactNode} from 'react'
import {Header} from "@/Layout"
import styles from "./LoggedOutLayout.module.scss"

interface LoggedOutLayoutProps {
  children: ReactNode;
}

export const LoggedOutLayout = ({ children }: LoggedOutLayoutProps) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Container}>
        {children}
      </div>
    </div>
  );
}

export default LoggedOutLayout