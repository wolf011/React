import axios from "axios";
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";

export const ExemploAxiosPorId = () => {
    const [clienteData, setClienteData] = useState(null);
    const [clienteId, setClienteId] = useState("");

    // get ID
    const buscarCliente = () => {
        axios.get(`https://6848a513ec44b9f34941880c.mockapi.io/clientes/${clienteId}`)
            .then((response) => setClienteData(response.data))
            .cacth(() => {console.error("Erro ao buscar os clientes");
            setClienteData(null);
            setClienteId("");
    });

    }

    return (
        <div className="container">
            <h2>Buscar Cliente Por Id</h2>
            <div className="mb-3">
                <label className="form-label">Id do Cliente:</label>
                <input
                    type="text"
                    className="form-control"
                    value={clienteId}
                    onChange={(e) => setClienteId(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={buscarCliente}>
                Buscar Cliente
            </button>

            {/* renderização condicional */}
            {clienteData && (
                <div className="mt-3">
                    <h2>Dados do Cliente</h2>
                    <p>Id:{clienteData.id} </p>
                    <p>Nome:{clienteData.nome}</p>
                    <p>Email:{clienteData.email}</p>
                </div>
            )}
        </div>
    );
}
