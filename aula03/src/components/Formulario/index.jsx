import { useState } from "react"

export const Formulario = () => {
    const [n1, setNota1] = useState(0);
    const [n2, setNota2] = useState(0);
    const [n3, setNota3] = useState(0);
    const [n4, setNota4] = useState(0);
    const [media, setMedia] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMedia((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4))/4);
    }
    
    return (
    <div>
        <form className="formulario" onSubmit={handleSubmit}>
            <label htmlFor="n1">Nota 1:</label>
            <input type="number" name="n1" id="n1" required value={n1} onChange={(e)=>{setNota1(e.target.value)}} />
            
            <label htmlFor="n2">Nota 2:</label>
            <input type="number" name="n2" id="n2" required value={n2} onChange={(e)=>{setNota2(e.target.value)}} />
            
            <label htmlFor="n1">Nota 3:</label>
            <input type="number" name="n3" id="n3" required value={n3} onChange={(e)=>{setNota3(e.target.value)}} />
            
            <label htmlFor="n1">Nota 4:</label>
            <input type="number" name="n4" id="n4" required value={n4} onChange={(e)=>{setNota4(e.target.value)}} />

            {n1 && n2 && n3 && n4? <label>Resultado: {media.toFixed(2) + " - " + (media>7?"Aprovado":media>=5?"Recuperação":"Reprovado")}</label>:""}
            <button className="botao">Calcular</button>
        </form>
    </div>
  )
}