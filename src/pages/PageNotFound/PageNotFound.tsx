import React from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
// estilos

export const PageNotFound = () => {
  const { setBreadcrumbItems } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbItems(["Página no encontrada"])
  }, [])

  return (
    <div>404 Papu</div>
  )
}

export default PageNotFound