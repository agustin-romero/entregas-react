import { useEffect, useState } from 'react';
import './App.css';

import customFetch from './customFetch';

function App() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch()
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <>
            <h1>Coder simple App</h1>
            <h2>Esta es una aplicacion simple de coder</h2>
            <p>We are enjoing React</p>
            <hr />
            <ol>
                {
                    //lista de videos
                    datos.map((dato) => <li key={dato.id}>{dato.title}</li>)
                }
            </ol>
            <hr />
            &copy; 2021. Todos los derechos reservados. by Agustin Romero.
        </>
    );
}

export default App;