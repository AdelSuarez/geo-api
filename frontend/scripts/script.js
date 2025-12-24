const btn = document.getElementById('btn-test');
const display = document.getElementById('resultado');

// URL del Backend (al estar en el navegador del usuario, usamos localhost)
const API_URL = 'http://localhost:3000/api/saludo';

btn.addEventListener('click', async () => {
    display.textContent = "Cargando...";
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error en la red');
        
        const data = await response.json();
        
        // Mostramos el resultado formateado
        display.innerHTML = `
            <strong>Mensaje:</strong> ${data.mensaje} <br>
            <strong>Fecha:</strong> ${data.fecha}
        `;
        display.style.borderLeft = "5px solid green";
    } catch (error) {
        display.textContent = "Error: No se pudo conectar con el backend.";
        display.style.borderLeft = "5px solid red";
        console.error(error);
    }
});