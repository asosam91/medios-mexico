import React from 'react';

export default function Card({ empresa }) {
  return (
    <article className="card">
      <h2>
        <a href={empresa.sitioWeb} target="_blank" rel="noopener noreferrer">
          {empresa.nombreComercial}
        </a>
      </h2>
      <p><strong>Nombre oficial: </strong>{empresa.nombreOficial}</p>
      <p><strong>Dueño: </strong>{empresa.dueno}</p>
      <p><strong>Sector: </strong>{empresa.sector}</p>
      <p><strong>Medios: </strong>{empresa.medios.join(', ')}</p>
      <p><strong>Resumen: </strong>{empresa.resumen}</p>
      <p><strong>Misión: </strong>{empresa.mision}</p>
      <p><strong>Visión: </strong>{empresa.vision}</p>
      <p><strong>Enfoque: </strong>{empresa.enfoque}</p>
    </article>
  );
}
