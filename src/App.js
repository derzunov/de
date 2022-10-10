import './App.css';
import { client } from './client';
import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Derzunova from "./pages/Derzunova";
import Posts from "./pages/Posts";
import Foxycat from "./pages/Foxycat";

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log(response);
            setItems(response.items);
        })
    }, []);

    return (
        <Router>
            <div className="App">
                <h1>DE Start point (edited once more)</h1>
                <h1>Elements:</h1>
                <ul>
                    { items.map( ( item ) => { return <li key= { item.sys.id }> {item.fields.title}</li>}) }
                </ul>
                <nav>
                    <div>
                        <Link to="/derzunova">Любовь</Link>
                    </div>

                    <div>
                        <Link to="/foxycat">Лиса</Link>
                    </div>

                    <div>
                        <Link to="/posts">Посты</Link>
                    </div>
                    <div>
                        <Link to="/">Back to Start point</Link>
                    </div>

                </nav>
            </div>

            <Routes>
                <Route path="/derzunova" element={<Derzunova/>}></Route>
                <Route path="/foxycat" element={<Foxycat/>}></Route>
                <Route path="/posts" element={<Posts/>}></Route>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    );
}

function Home() {
    return <>
        <h1>Точка входа</h1>
    </>
}

export default App;
