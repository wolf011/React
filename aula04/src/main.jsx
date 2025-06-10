import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from './App'
import { Effect } from './components/Effect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Effect/>
  </StrictMode>,
)
