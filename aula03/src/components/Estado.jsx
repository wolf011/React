import { useState } from "react";

export default function Estado() {
    // let valor = 100;
    const [valor, setValor] = useState(100);
        const [nome, setNome] = useState("Hugo");
        const nomes = ["Alexia", "Duda", "Dilma", "Fernando", "Hugo"]

    var [num, setNum] = useState(0);

    // const aumentar = () => setNum(num++);
    // const diminuir = () => setNum(num--);
    // const resetar = () => setNum(0);

    // function calcular() {
    //     setValor(valor*2);
    //     // valor=valor*2;
    //     console.log(valor);
    // }

  return (
    <div>
        <h1>Exemplo uso do States</h1>

        <p>Resultado: {valor}</p>
        {/* <button onClick={calcular}>Calcular</button>     */}
        <button onClick={() => setValor(valor*2)}>Calcular</button>    
        
        <p>Nome: {nome}</p>
        <button onClick={() => setNome(nomes[Math.floor(Math.random() * nomes.length)])}>Alterar Nome</button>    
        
        <p>Número: {num}</p>
        {/* <button onClick={aumentar}>Soma</button>     */}
        <button onClick={() => setNum(num++)}>Soma</button>    
        {/* <button onClick={diminuir}>Subtrai</button>     */}
        <button onClick={() => setNum(num--)}>Subtrai</button>    
        {/* <button onClick={resetar}>Reseta</button>     */}
        <button onClick={() => setNum(0)}>Reseta</button>

    </div>
  );
}


