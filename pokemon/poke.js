const nombrePokemon = document.getElementById("nombrePokemon");
const imagenPokemon = document.getElementById("imagenPokemon");
const descripcionElemento = document.getElementById("descripcionPokemon");
const inputPokemon = document.getElementById("inputPokemon");
const form = document.querySelector(".formulario");

const peticionApi = async (e) => {
    e.preventDefault();
    const pokemonBuscado = inputPokemon.value.toLowerCase().trim();

    try {
        const peticionGet = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`);
        if (!peticionGet.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const datos = await peticionGet.json();
        const imagenPoke = datos.sprites.other.dream_world.front_default || datos.sprites.front_default;
        const nombre = datos.name;
        const abilities = datos.abilities.map(habilidad => habilidad.ability.name).join(', ');

        nombrePokemon.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        imagenPokemon.src = imagenPoke;
        imagenPokemon.alt = nombrePokemon.textContent;
        descripcionElemento.textContent = `Habilidades: ${abilities}`;
    } catch (error) {
        nombrePokemon.textContent = "Oops!";
        imagenPokemon.src = "";
        imagenPokemon.alt = "";
        descripcionElemento.textContent = "No encontramos tu pokemon o lo perdiste :(";
        console.error(error);
    }
};

form.addEventListener('submit', peticionApi);
