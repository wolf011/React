import { useParams } from "react-router-dom"

export default function Produto() {
    const {id} = useParams();
  return (
    <div>
        <h2>Detalhes do Produto com id: {id}</h2>
    </div>
  )
}
