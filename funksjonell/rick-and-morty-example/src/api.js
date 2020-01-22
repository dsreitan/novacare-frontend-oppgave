const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {
  var response = await fetch(BASE_URL + "/character");
  return await response.json();
};
