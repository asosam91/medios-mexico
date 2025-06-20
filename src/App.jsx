import React from 'react';
import empresas from './data';
import './styles.css';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Top 10 Empresas de Medios y Noticias en México</h1>
      </header>
      <main id="empresas-container">
        {empresas.map((emp) => (
          <article key={emp.nombreComercial} className="card">
            <h2>
              <a href={emp.sitioWeb} target="_blank" rel="noopener noreferrer">
                {emp.nombreComercial}
              </a>
            </h2>
            <p><strong>Nombre oficial: </strong>{emp.nombreOficial}</p>
            <p><strong>Dueño: </strong>{emp.dueno}</p>
            <p><strong>Sector: </strong>{emp.sector}</p>
            <p><strong>Medios: </strong>{emp.medios.join(', ')}</p>
            <p><strong>Resumen: </strong>{emp.resumen}</p>
            <p><strong>Misión: </strong>{emp.mision}</p>
            <p><strong>Visión: </strong>{emp.vision}</p>
            <p><strong>Enfoque: </strong>{emp.enfoque}</p>
          </article>
        ))}
      </main>
    </div>
  );
}
