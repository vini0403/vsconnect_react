import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home/'

//estilizacao global
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
