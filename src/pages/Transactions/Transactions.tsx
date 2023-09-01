import React from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
// estilos

export const Transactions = () => {
  const { setBreadcrumbItems } = useAppContext()

  React.useEffect(() => {
    setBreadcrumbItems(["Transacciones"])
  }, [])

  return (
    <div>Transactions</div>
  )
}

export default Transactions