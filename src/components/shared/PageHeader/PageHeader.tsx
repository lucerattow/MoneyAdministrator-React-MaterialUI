import React from 'react'
import classNames from 'classnames'
// componentes
import { Grid, Typography, Box } from '@mui/material'
import { ButtonBack } from "@/components"
// estilos
import styles from "./PageHeader.module.scss"

export type PageHeaderProps = {
  className?: string
  title: string
  subtitle?: string
  buttonBack?: boolean
}

export const PageHeader: React.FC<PageHeaderProps> = ({ className, title, subtitle, buttonBack = false }) => {
  return (
    <Grid
      className={classNames(className, styles.header)}
      container
      direction="row"
      wrap="nowrap"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid container direction="row" sx={{ width: "fit-content" }}>
        {buttonBack && <ButtonBack className={styles.back_button} />}
        <Typography variant="h5">{title}</Typography>
      </Grid>
      {subtitle && <Typography variant="h5">{subtitle}</Typography>}
    </Grid>
  )
}

export default PageHeader