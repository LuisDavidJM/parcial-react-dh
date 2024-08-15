import React, { useState } from 'react';
import Card from "./Components/Card";
import styles from './assets/App.module.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 3 || title.trim().startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      setFlag(false);
      return;
    }
    if (description.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setFlag(false);
      return;
    }

    setError('');
    setFlag(true);
  };

  return (
    <div className={styles.container}>
      <h1>Carga de Libros</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Titulo del libro'
          />
        </div>
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Descripción del libro'
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p className={styles.errorMessage}>{error ? error : null}</p>
      {flag ? <Card title={title} description={description} /> : null}
    </div>
  );
}

export default App
