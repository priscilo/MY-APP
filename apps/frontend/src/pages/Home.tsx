import { useEffect, useState } from 'react';
import { fetchHello } from '@services/api';
import { Button } from '@components/Button';

export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchHello().then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>Frontend conectado</h1>
            <p>{message}</p>
            <Button onClick={() => alert('¡Haz clic!')}>Haz clic aquí</Button>
        </div>
    );
}