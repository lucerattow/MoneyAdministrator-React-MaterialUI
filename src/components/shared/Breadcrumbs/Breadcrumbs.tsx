import React from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
import {
  Breadcrumbs as MuiBreadcrumbs,
  Typography
} from '@mui/material';
// estilos

export const Breadcrumbs = () => {
  const { breadcrumbItems } = useAppContext()

  return (
    <MuiBreadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 1, ml: 0.5 }}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color={breadcrumbItems.length === 0 ? "text.primary" : undefined}
      >
        Inicio
      </Typography>
      {breadcrumbItems?.map((value, index) => {
        const last = index === breadcrumbItems.length - 1;
        return (
          <Typography color={last ? "text.primary" : undefined} key={index}>
            {value}
          </Typography>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs