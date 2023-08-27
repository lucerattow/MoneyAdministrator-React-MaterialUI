import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoggedOutLayout, LoggedInLayout } from '@/Layout'
import {
  CreditCardDetails,
  CreditCards,
  LogIn,
  Register
} from '@/pages'
import { useAppContext } from '@/hooks'

export const AppRoutes = () => {
  const { user } = useAppContext()

  return (
    <Router>
      {user === null
        ? (
          <LoggedOutLayout>
            <Routes>
              <Route path="/" element={<LogIn />} />
              <Route path="/register" element={<Register />} />

              <Route path="*" element={<h1>404 Error, pagina no encontrada</h1>} />
            </Routes>
          </LoggedOutLayout>
        ) : (
          <LoggedInLayout>
            <Routes>
              <Route path="/" element={<h1>Dashboard</h1>} />
              <Route path="/credit-cards" element={<CreditCards />} />
              <Route path="/transactions" element={<h1>Transacciones</h1>} />
              <Route path="/credit-card-details/:id" element={<CreditCardDetails />} />

              <Route path="*" element={<h1>404 Error, pagina no encontrada</h1>} />
            </Routes>
          </LoggedInLayout>
        )
      }
    </Router>
  )
}

export default AppRoutes