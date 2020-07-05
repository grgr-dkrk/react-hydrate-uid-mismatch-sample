import * as React from 'react'
import { Header } from './components/Header'
import Routes from './routes/client'

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  )
}
