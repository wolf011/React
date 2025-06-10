import { useContext, useState } from "react"
import { UserContext } from "../contexts/user"

// export const Nomes = ({nome,alterarNome}) => {
export const Nomes = () => {
    const [novoNome, setNovoNome] = useState("")
    const{nomeAluno, setNomeAluno, total} = useContext(UserContext);

  return (
    <div>
        <p>Número total de aluno: {total}</p>
        {/* <h2>Nome do Aluno: {nome}</h2> */}
        <h2>Nome do Aluno: {nomeAluno}</h2>
        <input type="text" placeholder="Nome novo" onChange={(e) => setNovoNome(e.target.value)}/>
        <button onClick={()=>{setNomeAluno(novoNome)}}>Alterar Nome</button>
    </div>
  )
}
