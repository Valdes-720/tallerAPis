document.getElementById("formClima").addEventListener("submit", function (e) {
    e.preventDefault();

    const ciudad = document.getElementById("ciudad").value;
    const API_KEY = "acd1cf4790b50a5722c1ed551650bccf"; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ciudad no encontrada");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("resultadoClima").style.display = "block";
            document.getElementById("nombreCiudad").textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById("temp").textContent = data.main.temp;
            document.getElementById("descripcion").textContent = data.weather[0].description;
            document.getElementById("humedad").textContent = data.main.humidity;
        })
        .catch(error => {
            alert("Error: " + error.message);
            document.getElementById("resultadoClima").style.display = "none";
        });
});
// //<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
