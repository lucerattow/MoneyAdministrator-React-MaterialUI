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
  Dashboard,
  PageNotFound,
  LogIn,
  Register,
  Transactions
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

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </LoggedOutLayout>
        ) : (
          <LoggedInLayout>
            <Routes>
              <Route path={routeHome} element={<Dashboard />} />
              <Route path={routeCreditCards} element={<CreditCards />} />
              <Route path={routeTransactions} element={<Transactions />} />
              <Route path={routeCreditCardDetails(":id")} element={<CreditCardDetails />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </LoggedInLayout>
        )
      }
    </Router>
  )
}

export default AppRoutes