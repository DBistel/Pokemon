async function getPokemon() {
  const nameOrId = document.getElementById("pokemonInput").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Pokémon not found");

    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    document.getElementById("pokemonInfo").innerHTML = `<p>${error.message}</p>`;
  }
}

function displayPokemon(pokemon) {
  const container = document.getElementById("pokemonInfo");
  container.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>ID:</strong> ${pokemon.id}</p>
    <p><strong>Type:</strong> ${pokemon.types.map(t => t.type.name).join(", ")}</p>
    <p><strong>Height:</strong> ${pokemon.height}</p>
    <p><strong>Weight:</strong> ${pokemon.weight}</p>
  `;
}
