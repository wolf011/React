import { Botao } from "./Botao"
import { Entrada } from "./Entrada"

export const Evento = () => {

    const testeEvento = () => {console.log("Teste Evento")}
    const segundoEvento = () => {console.log("Segundo Evento")}

    return (
    <div>
        <Botao evento = {testeEvento} text="Botão 1"/>
        <Botao evento = {segundoEvento} text="Botão 2"/>
        <Entrada/>
    </div>
  )
}

