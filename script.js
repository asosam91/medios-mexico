document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("empresas-container");

  empresas.forEach(emp => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2><a href="${emp.sitioWeb}" target="_blank">${emp.nombreComercial}</a></h2>
      <p><strong>Nombre oficial:</strong> ${emp.nombreOficial}</p>
      <p><strong>Dueño:</strong> ${emp.dueno}</p>
      <p><strong>Sector:</strong> ${emp.sector}</p>
      <p><strong>Medios:</strong> ${emp.medios.join(", ")}</p>
      <p><strong>Resumen:</strong> ${emp.resumen}</p>
      <p><strong>Misión:</strong> ${emp.mision}</p>
      <p><strong>Visión:</strong> ${emp.vision}</p>
      <p><strong>Enfoque:</strong> ${emp.enfoque}</p>
    `;

    container.appendChild(card);
  });
});