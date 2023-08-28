import React, { useEffect } from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
// estilos

export const PageNotFound = () => {
  const { setBreadcrumbItems } = useAppContext()

  useEffect(() => {
    setBreadcrumbItems(["Página no encontrada"])
  }, [])

  return (
    <div>404 Papu</div>
  )
}

export default PageNotFound