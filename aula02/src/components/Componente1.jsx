export const Componente1 = () => <h1>Componente1</h1>;

export const Componente2 = () => {

    const times = ['Vasco', 'América', 'Flamengo', 'Fluminense', 'Botafogo', 'Bangu'];
    const listaDeTimes = times.map((time, index) => (<li key={index}>{time}</li>));
    const timesFiltro = times.filter(time => time.length > 5);
    
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    const calculo = numeros.reduce((total, numero)=>total + numero, 0);

    return (
        <>
            <h1>Componente2</h1>
            <ul>{listaDeTimes}</ul>
            <p>Soma:{calculo}</p>
            <p>Times com mais de 5 caracteres: {timesFiltro.join(", ")} </p>
        </>
    );
};