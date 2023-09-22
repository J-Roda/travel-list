import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
    const [items, setItems] = useState([]);

    return (
        <div className="app">
            <Logo />
            <Form setItems={setItems} />
            <PackingList items={items} setItems={setItems} />
            <Stats items={items} />
        </div>
    );
}

export default App;
