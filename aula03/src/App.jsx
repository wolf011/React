import { Form } from "./components/Form/index.jsx"
import { Header } from "./components/Header/index.jsx"
import "./App.css";
import { Formulario } from "./components/Formulario/index.jsx";

export const App = () => {

  return (
    <div>
      {/* <Header title="Cálculo do IMC" />
      <div className="corpo">
      <Form/> */}
      <Header title="Média" />
      <div className="corpo">
      <Formulario/>

      </div>
    </div>
  )
}