class CallApi {
  async getAllPokemon() {
    try {

      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon"
      );
      const data = await response.json();
      const response2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${data.count}`
      );
      const data2 = await response2.json();


      return data2;


    } catch (error) {
      return false;
    }
  }


  async getPokemon(name) {
    try {

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const data = response.json();
    
      return data;


    } catch (error) {
      return false;
    }
  }


}
export const callApi = new CallApi();
