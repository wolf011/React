import Filho from './Filho'

export default function Usuario() {
  const usuarios = [{
    nome:"Alexia",
    email:"alexia@email.com"
  },{
    nome:"Duda",
    email:"dudinha@email.com"
  },{
    nome:"Dilmãe",
    email:"dilma@email.com"
  },{
    nome:"Fernando",
    email:"luis@email.com"
  }
]
    return (
    <div>
        <Filho users={usuarios}/>
    </div>
  )
}

