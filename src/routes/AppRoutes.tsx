import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// recursos locales
import { useAppContext } from '@/hooks'
import {
  routeHome,
  routeRegister,
  routeTransactions,
  routeCreditCards,
  routeCreditCardDetails,
} from "@/routes"
// componentes
import {
  CreditCardDetails,
  CreditCards,
  LogIn,
  Register
} from '@/pages'
import { LoggedOutLayout, LoggedInLayout } from '@/Layout'

export const AppRoutes = () => {
  const { user } = useAppContext()

  return (
    <Router>
      {user === null
        ? (
          <LoggedOutLayout>
            <Routes>
              <Route path={routeHome} element={<LogIn />} />
              <Route path={routeRegister} element={<Register />} />

              <Route path="*" element={<h1>404 Error, pagina no encontrada</h1>} />
            </Routes>
          </LoggedOutLayout>
        ) : (
          <LoggedInLayout>
            <Routes>
              <Route path={routeHome} element={<h1>Dashboard</h1>} />
              <Route path={routeCreditCards} element={<CreditCards />} />
              <Route path={routeTransactions} element={<h1>Transacciones</h1>} />
              <Route path={routeCreditCardDetails(":id")} element={<CreditCardDetails />} />

              <Route path="*" element={<h1>404 Error, pagina no encontrada</h1>} />
            </Routes>
          </LoggedInLayout>
        )
      }
    </Router>
  )
}

export default AppRoutes