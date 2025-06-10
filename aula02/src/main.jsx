import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppClasse from './components/AppClasse.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <ExemploCss/> */}
    <AppClasse curso="React" />
  </StrictMode>,
)
