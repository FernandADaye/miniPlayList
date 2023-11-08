import { Header } from '@/component/Header'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routesindex from './routers/Routesindex'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        Principal
        <Routesindex />
      </BrowserRouter>

    </>
  )
}

export default App
