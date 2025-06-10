import Exemplo from "./components/Exemplo";

// export default function App() {
//   const nome = "Maria";
//   const maiusculo = nome.toUpperCase();

  // function calculo(a, b) {
  //   return a + b;
  // }

//   const calculo = (a, b) => a + b;


//   return (
//     <>
//       <h1>Hello World!</h1>
//       <h2>Aula de React</h2>
//       <h3>{maiusculo}</h3>
//       <h3>Soma:{calculo(10, 30)}</h3>
//       <Exemplo />
//     </>
//   )
// }


const App = () => {
  const nome = "Maria";
  const maiusculo = nome.toUpperCase();

  const calculo = (a, b) => a + b;

  return (
    <>
    <h1>Hello World!</h1>
    <h2>Aula de React</h2>
    <h3>{maiusculo}</h3>
    <h3>Soma:{calculo(10, 30)}</h3>
    <Exemplo />
    </>
  )
}

export default App;