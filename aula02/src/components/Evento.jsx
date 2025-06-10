export default function Evento() {
    const handleClick = () => alert("Clicado");
  
    return (
    <div>
        <h2>Trabalhando com eventos</h2>
        {/*Executa a função sem clicar */}
        {/* <button onClick={handleClick()} >Evento de click</button> */} 
        <button onClick={handleClick} >Evento de click</button>
        <p>Segundo botão</p>
        <button onClick={()=>{alert("clicado2!")}}>Evento de click2</button>
    </div>
  )
}
