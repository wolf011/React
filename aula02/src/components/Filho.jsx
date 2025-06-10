export default function Filho({users}) {
const listaDeUsuarios = users.map((usuario, index) => (<li key={index}>
        <p>Nome: {usuario.nome}</p>
        <p>Email: {usuario.email}</p>
        </li>));

return (
    <div>
        <h2>Lista de usuários</h2>
        <ul>
        <p>{listaDeUsuarios}</p>
        </ul>
    </div>
  )
}
