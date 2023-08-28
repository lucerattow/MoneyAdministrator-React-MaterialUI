import React, { useEffect } from 'react'
// recursos locales
import { useAppContext } from "@/hooks"
// componentes
// estilos

export const Transactions = () => {
  const { setBreadcrumbItems } = useAppContext()

  useEffect(() => {
    setBreadcrumbItems(["Transacciones"])
  }, [])

  return (
    <div>Transactions</div>
  )
}

export default Transactions