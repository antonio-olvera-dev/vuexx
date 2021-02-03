class CallApi {
  async getAllPokemon(limit = 20, offset = 0) {
    try {


      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      return await response.json();

    } catch (error) {
      return false;
    }
  }


  async getPokemon(name) {
    try {

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      
      return response.json();


    } catch (error) {
      return false;
    }
  }


}
export const callApi = new CallApi();
