// import './App.css'
import "./index.css"
import { useTheme, ThemeProvider } from './contexts/ThemeContext'
import { User } from "./components/User";
// import Botao from './components/Botao'
// import Saudacao from './components/Saudacao'


const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>Mudar para {darkMode ? "Light" : "Dark"} Mode</button>
  )
}

const MainContent = () => {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>{darkMode ? "Modo escuro" : "Modo claro"}</h1>
      <ThemeToggle />
    </div>
  )
}


function App() {

  return (
    <>
      {/* <h2>Botão Simples:</h2>
    <Botao/> */}
      {/* <Saudacao nome="Saudacao props"/>
    <Saudacao nome="Alexia"/> */}
      {/* <Saudacao nome="Hugo"/> */}
      <ThemeProvider>
        <MainContent />
        <User/>
      </ThemeProvider>
    </>
  )

}

export default App
