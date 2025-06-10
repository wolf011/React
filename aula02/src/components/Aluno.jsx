// export default function Aluno(props) {
//   return (
//     <div>
//         <p>Nome: {props.nome}</p>
//         <p>Email: {props.email}</p>
//         <p>Telefone: {props.telefone}</p>
//     </div>
//   )
// }
export default function Aluno({nome, email, telefone, matriculado}) {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Telefone: {telefone}</p>
        <p>O aluno está matriculado? {matriculado?"Sim":"Não"}</p>
    </div>
  )
}
