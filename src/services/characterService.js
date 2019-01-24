const URI = "https://hp-api.herokuapp.com/api/characters";

const fetchCharacters = () => fetch(URI).then(response => response.json());

export { fetchCharacters };
