import { useEffect, useState } from "react"

export const Effect = () => {
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("Arnold");
    const [texto, setTexto] = useState("Exemplo");
    const [hora, setHora] = useState(new Date());
    const [user, setUser] = useState({});

    // useEffect(() => {
    //     if (contador === 3) {
    //         alert("Teste de useEffect")
    //     }
    // }, [contador])
    
    // useEffect(() => {
    //     setInterval(()=> setTexto("Exemplo useEffect"), 3000)
    // }, [texto])

    useEffect(() => {
        setHora(new Date(), 1000)
    }, [hora])
    

    useEffect(()=> {
        fetch("https://api.github.com/users/wolf011")
        .then((resposta)=>resposta.json())
        .then((json)=>setUser(json));
    }, []);

    return (
        <div>
            <p>Hora: {hora.toLocaleTimeString()}</p>

            <p>Login: {user.login}</p>
            <img src={user.avatar_url} alt="imagem"/>
            <hr/>
            <p>{texto}</p>
            <p>Contador: {contador}</p>
            <p>Nome: {nome}</p>
            <button onClick={() => (setContador(contador + 1))}>Incrementar</button>
            <button onClick={(prevNome) => setNome(prevNome === "Antônio" ? "Arnold" : "Antônio")}>Alterar nome</button>
        </div>
    )
}
