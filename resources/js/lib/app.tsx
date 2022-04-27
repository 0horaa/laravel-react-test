import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Button } from "./components/Button";

type UserProps = {
    name: string;
    age: number;
}

export function App() {

    const [number, setNumber] = useState(0);

    function handleSum() {
        setNumber(number + 1);
    }

    useEffect(() => alert('boa noite'), [number]);

    const users: UserProps[] = [
        { name: 'John', age: 20 },
        { name: 'Bob', age: 30 },
        { name: 'Mary', age: 40 },
        { name: 'Sergio', age: 23 }
    ];

    return (
        <div>
            {users.map((user) => (
                <section>
                    <h1>Usuário: {user.name} - {user.age} anos</h1>
                </section>
            ))}

            <Button onClick={handleSum} />
            <p>{number}</p>
        </div>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
