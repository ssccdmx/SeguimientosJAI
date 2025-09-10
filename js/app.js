document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const evaluadora = document.getElementById('Evaluadora').value;
    const integrante = document.getElementById('Integrante').value;

    // Verificar si Evaluadora e Integrante son diferentes de "-Elige una opción-"
    if (evaluadora === "false" || integrante === "false") {
        alert('Por favor, selecciona una Evaluadora e Integrante.');
        return; // Evita que el formulario se envíe
    }

    // Actualizar la fecha después de la validación exitosa
    document.getElementById('Fecha').textContent = obtenerFechaActual();

    const respuesta = await fetch('https://sheetdb.io/api/v1/20f0w0svh80gn', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Fecha": obtenerFechaActual(),
            "Evaluadora": evaluadora,
            "Integrante": integrante,
            "Folio": document.getElementById('Folio').value,
            "Saludo": document.getElementById('Saludo').checked,
            "Focaliza": document.getElementById('Focaliza').checked,
            "Escucha": document.getElementById('Escucha').checked,
            "Empatia": document.getElementById('Empatia').checked,
            "Aviso": document.getElementById('Aviso').checked,
            "Servicios": document.getElementById('Servicios').checked,
            "Encuesta": document.getElementById('Encuesta').checked,
            "Despedida": document.getElementById('Despedida').checked,
            "Observaciones": document.getElementById('Observaciones').value
        })
    });

    // Manejo de la respuesta...
});

function obtenerFechaActual() {
    const date = new Date();
    const day = agregarCeroAlPrincipio(date.getDate());
    const month = agregarCeroAlPrincipio(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = agregarCeroAlPrincipio(date.getHours());
    const minutes = agregarCeroAlPrincipio(date.getMinutes());

    // Formatear la fecha como "DD/MM/AAAA HH:MM"
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function agregarCeroAlPrincipio(valor) {
    // Agrega un cero al principio si el valor es un solo dígito
    return valor < 10 ? `0${valor}` : valor;
}

// Mostrar la fecha actual en la consola (puedes adaptarlo según tus necesidades)
console.log(obtenerFechaActual());
