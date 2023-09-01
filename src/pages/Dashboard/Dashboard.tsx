import React from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
// estilos

export const Dashboard = () => {
  const { setBreadcrumbItems } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbItems(["Dashboard"])
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard