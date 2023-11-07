import './App.css'
import { Dashboard, Home, Login, Secret, Singup } from '@/pages'
import { Header } from './pages'
function App () {
  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Login />
      <Secret />
      <Singup />

    </>
  )
}

export default App
