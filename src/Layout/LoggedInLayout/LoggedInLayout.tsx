import React, {ReactNode} from 'react'
import {Header} from "@/Layout"
import { Routes, Route } from 'react-router-dom';
import styles from "./LoggedInLayout.module.scss"

interface LoggedInLayoutProps {
  children: ReactNode;
}

export const LoggedInLayout = ({ children }: LoggedInLayoutProps) => {
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
    </div>
  );
}

export default LoggedInLayout