import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import Estado from './components/Estado.jsx'
import { Evento } from './components/Evento.jsx'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Estado/> */}
    {/* <Evento/> */}
  </StrictMode>,
)
