<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand ><router-link to="/">HOME</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item ><router-link to="/pokedex">Pokédex</router-link></b-nav-item>
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
            
              v-model="query"
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button

              v-on:click ="search"
              size="sm"
              class="my-2 my-sm-0"
              type="button"
              >Search</b-button
            >
          </b-nav-form>


            <b-nav-item-dropdown v-bind:text="namePoke"  right>

            <b-dropdown-item href="#"  v-for="pokemon in allPokemon"
            v-bind:key="pokemon"
             v-on:click="select(pokemon)" >{{pokemon}}</b-dropdown-item>

          </b-nav-item-dropdown>


          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { callApi } from "./../../services/CallApi";

export default {
  data() {
    return {
       query: "",
    allPokemon: [],
    namePoke: "Name Pokemon"
    }
  },
 async beforeCreate(){
   try {
        const data = await callApi.getAllPokemon();
         for (const it of data.results) {
           this.allPokemon.push(it.name);
         }
          console.log(this.allPokemon);
      } catch (error) {
        console.log(error);
      }

  },

  methods: {
    async search()  {
     try {
      const poke = await callApi.getPokemon(this.query);
      console.log(poke);
     } catch (error) {
       console.log(error);
     }
    },
    select(name){
      this.namePoke = name;
      this.query = name;
    }

  },
};
</script>

<style scoped>
.header{
  
}

a{
  text-decoration: none;
  color: rgba(255, 255, 255, 0.733);
}
a:hover{
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}


</style>
