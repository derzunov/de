import './App.css';
import { client } from './client';
import {useEffect, useState} from "react";

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log(response);
            setItems(response.items);
        })
    }, []);

    return (
        <div className="App">
            <h1>DE Start point (edited once more)</h1>
            <h1>Elements:</h1>
            <ul>
                { items.map( ( item ) => { return <li>{item.fields.title}</li>}) }
            </ul>
        </div>
    );
}

export default App;
