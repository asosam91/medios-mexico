import React from 'react';
import empresas from './data';
import Card from './components/Card';
import './styles.css';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Principales empresas de medios en México</h1>
      </header>
      <main id="empresas-container">
        {empresas.map((emp) => (
          <Card key={emp.nombreComercial} empresa={emp} />
        ))}
      </main>
      <footer>&copy; 2025 Medios de México</footer>
    </div>
  );
}
