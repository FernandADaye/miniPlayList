import { Header } from '@/component/Header'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routesindex from './routers/RoutesIndex'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Routesindex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
