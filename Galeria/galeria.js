let btn = document.getElementById("btn");
let contenedor = document.getElementById("contenedorVacio");

btn.addEventListener('click', apiExterna);

async function apiExterna() {
    let url = "https://jsonplaceholder.typicode.com/photos";
    try {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();

        
        contenedor.innerHTML = "";
        let laInfo = datos.slice(0, 12);
        laInfo.forEach((foto) => {
            contenedor.innerHTML += `
                <img src="${foto.url}" alt="${foto.title}">
            `;
        });
    } catch (error) {
        console.error("Error al consultar la API:", error);
    }
}