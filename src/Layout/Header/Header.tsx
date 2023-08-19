import React from 'react'
import {
  Paper,
} from '@mui/material';
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <Paper className={styles.Header}>
      <h1>Header</h1>
    </Paper>
  )
}

export default Header
