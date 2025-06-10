import { useState } from "react"

export const Entrada = () => {
    const [texto, setTexto] = useState("");

    const handleChange = (event) => {setTexto(event.target.value)}

  return (
    <div>
        <h1>Exemplo de input e state</h1>
        <input type="text" placeholder="Digite algo" onChange={handleChange}/>
        <p>Você digitou: {texto}</p>
    </div>
  )
}
