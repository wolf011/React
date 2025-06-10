import Curso from './components/curso.jsx'
import Aluno from './components/aluno.jsx'
import Usuario from './components/Usuario.jsx'
import { Componente1, Componente2 } from './components/Componente1.jsx'

const App = () => {
  return(
    <>
        <h1>Teste</h1>
        <Componente1/>
        <Componente2/>
        <Curso nome="React" />
        <Aluno nome="Hugo Boss" email="hugobrabo@email.com" telefone="24610997" matriculado={true}/>
        <Usuario/>
    </>
  )
}

export default App