import { useContext } from "react"
import { Nomes } from "../Nome"
import { UserContext } from "../contexts/user"

// export const Alunos = ({nome, alterarNome}) => {
export const Alunos = () => {
    const {nomeAluno} = useContext(UserContext)
  return (
    <div>
        {/* <h1>Componente Alunos: {nome}</h1> */}
        <h1>Componente Alunos: {nomeAluno} </h1>
        {/* <Nomes nome={nome} alterarNome={alterarNome}/> */}
        <Nomes/>
    </div>
  )
}
