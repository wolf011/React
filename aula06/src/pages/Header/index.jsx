import { Link } from "react-router-dom";
import Back from "../../assets/back-button.svg"

export default function Header() {
  return (
    <div className="container">
      <Link to={"/"}>
        <img src={Back} alt="voltar" style={{ width: "50px" }} />
      </Link>
    </div>
  )
}