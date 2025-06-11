// import { ExemploAxios } from "./components/ExemploAxios"
// import { ExemploAxiosPorId } from "./components/ExemploAxiosPorId"

import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { AppRouter } from "./routes/AppRouter"

export const App = () => {
  return (
    <div>
      {/* <ExemploAxios/> */}
      {/* <ExemploAxiosPorId/> */}

      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>

    </div>
  )
}
