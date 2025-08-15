let btn = document.getElementById("btn");
let contenedor = document.getElementById("contenedorVacio");

btn.addEventListener('click', apiExterna);

async function apiExterna() {
    let url = "https://jsonplaceholder.typicode.com/photos";
    try {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();

        // Crear el contenedor de la galería
        contenedor.innerHTML = '<div class="contenedorGaleria"></div>';
        let galeria = contenedor.querySelector('.contenedorGaleria');
        let laInfo = datos.slice(0, 12);
        laInfo.forEach((foto) => {
            galeria.innerHTML += `
                <img src="${foto.url}" alt="${foto.title}">
            `;
        });
    } catch (error) {
        console.error("Error al consultar la API:", error);
    }
}