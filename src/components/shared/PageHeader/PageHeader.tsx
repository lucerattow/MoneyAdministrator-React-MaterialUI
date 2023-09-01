import React from 'react'
import classNames from 'classnames'
// componentes
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { ButtonBack } from "@/components"
// estilos
import styles from "./PageHeader.module.scss"

export type PageHeaderProps = {
  className?: string
  title: string
  buttonBack?: boolean
}

export const PageHeader: React.FC<PageHeaderProps> = ({ className, title, buttonBack = false }) => {
  return (
    <Grid container className={classNames(className, styles.header)} alignItems="center">
      {buttonBack && <ButtonBack className={styles.back_button} />}
      <Typography variant="h5">{title}</Typography>
    </Grid>
  )
}

export default PageHeader