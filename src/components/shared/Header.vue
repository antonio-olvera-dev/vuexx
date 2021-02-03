<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand><router-link to="/">HOME</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/pokedex">Pokédex</router-link></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- ---Input--- -->
            <div class="input-header">
              <b-form-input
              autocomplete="off"
                @focus="blockFilter(true)"
                @blur="blockFilter(false)"
                @keydown="filterPoke"
                v-model="query"
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <div v-if="pokeFilterBlock" class="auto-head">
                <div class="auto-head-in">
                  <div  class="auto-head-name" v-for="name in pokeFilter"
                  v-bind:key="name">
                    <p v-on:click="select(name)" >{{name}}</p>
                  </div>
                </div>
              </div>
            </div>

            <b-button
              v-on:click="search"
              size="sm"
              class="my-2 my-sm-0"
              type="button"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown v-bind:text="namePoke" right>
            <b-dropdown-item
              href="#"
              v-for="pokemon in allPokemon"
              v-bind:key="pokemon"
              v-on:click="select(pokemon)"
              >{{ pokemon }}</b-dropdown-item
            >
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
      pokeFilter: [],
      pokeFilterBlock: false,
      namePoke: "Name Pokemon",
    };
  },
  async beforeCreate() {
    try {
      const data = await callApi.getAllPokemon();
      for (const it of data.results) {
        this.allPokemon.push(it.name);
      }
      this.allPokemon = this.allPokemon.sort()
      this.pokeFilter = this.allPokemon
      console.log(this.allPokemon);
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    const element = document.getElementsByClassName("dropdown-menu");
    element[0].style.maxHeight = "40vh";
    element[0].style.overflow = "scroll";
  },
  methods: {
    async search() {
      try {
        const poke = await callApi.getPokemon(this.query);
        console.log(poke);
      } catch (error) {
        console.log(error);
      }
    },
    select(name) {
      console.log(name);
      this.namePoke = name;
      this.query = name;
    },

    blockFilter(bol) {
      this.pokeFilterBlock = bol;
    },
    filterPoke(ev) {
      const newArray = []
      for (const item of this.allPokemon) {
        if (item.search(ev.target.value.toLowerCase()) > -1) {
          newArray.push(item)
        }
      }
      this.pokeFilter = newArray
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.733);
}

a:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}

.input-header {
  display: flex;
  flex-direction: column;
}
.auto-head {
  margin-top: 2.1em;
  height: 35vh;
  width: 10.8em;
  
  position: absolute;
}

.auto-head-in {
  background-color: white;
  height: 30vh;
  margin-right: 0.5em;
  margin-top: 0.3em;
  border-radius: 0.4em;
overflow: scroll;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.384);
}

.auto-head-name {
  padding: 0.5em;
}
</style>
