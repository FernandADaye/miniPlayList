import './App.css'
import { Dashboard, Home, Login, Secret, Singup } from '@/pages'
import { Header } from '@/component/Header'
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
