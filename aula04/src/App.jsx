import { Alunos } from "./components/Alunos"
import UserProvider from "./components/contexts/user";

export const App = () => {
  // const [nomeAluno, setNomeAluno] = useState("Alexia");
  return (
    <UserProvider>
      <div>

        <h1>Escola XPTO...</h1>
        {/* <Titulo>
        <h1>Teste Children</h1>
        <h2>Exemplo</h2>
      </Titulo> */}
        <hr />
        {/* <Alunos nome={nomeAluno} alterarNome={setNomeAluno} /> */}
        <Alunos />

      </div>
    </UserProvider>
  )
}

// const Titulo = ({ children }) => {
//   return (
//     <>
//       {children}
//     </>
//   )
// }
