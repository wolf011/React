import { useState } from "react";
import "./style.css";
export const Form = () => {
  const[peso, setPeso] = useState(0);
  const[altura, setAltura] = useState(0);
  const[imc, setImc] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setImc(peso/altura**2);
  };

  return (
    <div>
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="peso">Peso:</label>
            <input type="number" name="peso" id="peso" required value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>

            <label htmlFor="altura">Altura:</label>
            <input type="number" name="altura" id="altura" required value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>

            {peso && altura? <label>Resultado: {imc.toFixed(2) + " - " + (imc>20?"Acima do peso":imc<18.5?"Abaixo do peso":"Peso OK")}</label>:""}
            <button className="botao">Calcular</button>
        </form>
    </div>
  )
}